
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Club = require('../models/club');
const User = require('../models/user');
const mongoose = require('mongoose');

const getClubByName = async (req, res, next) => {
    const clubname = req.params.cn;
    let clubs;

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

const createClub = async (req, res, next) => {
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