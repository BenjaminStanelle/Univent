
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const Club = require('../models/club');
const User = require('../models/user');

const getClubByName = async (req, res, next) => {
    /**
     * takes a club name from the URL and returns the database entry for that club
     */
    const clubname = req.params.cn;
    let clubs;

    // find the club by clubname
    try{
        clubs = await Club.find({clubname: clubname}).exec();
    } catch(err){
        return next(new HttpError('something went wrong', 500));
    }

    if(!clubs){
        return next(new HttpError('can\'t find club with that name', 404));
    }

    res.json({ clubs: clubs.map(club => club.toObject({getters: true})) });
}

const getClubsByUserId = async (req, res, next) => {
    /*
    * controller method to retrieve all of the clubs belonging to a specific user
    * the user id must be passed in the request body of the user we're interested in. 
    * it is of type mongoose ObjectId
    */
    const userId = req.body.userId;

    console.log("USER ID: " + userId);

    let userWithClubs;
    try{
        userWithClubs = await User.findById(userId).populate('clubs');
    } catch (err){
        console.log(err);
        return next(new HttpError('something went wrong, please try again later.', 500));
    }

    console.log(userWithClubs);

    if(!userWithClubs || userWithClubs.clubs.length === 0){
        console.log(userWithClubs);
        return next( new HttpError('Could not find Clubs for provided user id.', 404));
    }
    console.log(userWithClubs.clubs);
    res.json({ clubs: userWithClubs.clubs.map(club => club.toObject({ getters: true }))});
    //res.json({clubs: 'this is working EEEEEEEEEEEEEEE'});
}

const createClub = async (req, res, next) => {
    /**
     * takes a http request containing a json object of the new club and adds it to the database
     */
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return( new HttpError('invalid inputs passed, please check your data.', 422));
    }
    const { clubname, description, symbol, club_cat } = req.body;
    const createdClub = new Club({
        clubname,
        description,
        symbol,
        club_cat,
        image: 'https://images.musement.com/cover/0003/90/am-pm-experience-cover_header-289357.png?lossless=false&auto=format&fit=crop&h=245&w=355',
        students: [],
        admin: [],
        events: []
    });

    try{
        await createdClub.save();
    } catch (err){
        console.log(err)
        const error = new HttpError(
            'creating club failed, please try again',
            500
        );
        return next(error);
    }
    res.status(201).json({ message: "created club!"});
}

exports.createClub = createClub;
exports.getClubByName = getClubByName;
exports.getClubsByUserId = getClubsByUserId;