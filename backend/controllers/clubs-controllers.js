
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Group = require('../models/group');
const User = require('../models/user');
const mongoose = require('mongoose');



const createGroup = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return( new HttpError('invalid inputs passed, please check your data.', 422));
    }
    const { clubname, description, symbol, club_cat } = req.body;
    const createdGroup = new Group({
        clubname,
        description,
        image,
        symbol,
        club_cat,
        image: 'https://images.musement.com/cover/0003/90/am-pm-experience-cover_header-289357.png?lossless=false&auto=format&fit=crop&h=245&w=355',
        students: [],
        admin: [],
        events: []
    });

    try{
        await createdGroup.save();
    } catch (err){
        console.log(err)
        const error = new HttpError(
            'creating group failed, please try again',
            500
        );
        return next(error);
    }
}