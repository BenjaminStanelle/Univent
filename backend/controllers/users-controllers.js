const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const User = require('../models/user');
const Club = require('../models/club');
const mongoose = require('mongoose');

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ users: users.map(user => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { name, studentID, email, password } = req.body;
  const access = req.params.aid;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      'User exists already, please login instead.',
      422
    );
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      'Could not create user, please try again.',
      500
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
    studentID,
    access,
    clubs: []
  });



  console.log(createdUser);

  try {
    await createdUser.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      'supersecret_dont_share',
      { expiresIn: '1h' }
    );
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }

  res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token: token });
};

const joinGroup = async (req, res, next) => {
  const clubname = req.params.cn;
  let club;
  let user;
  let userId = req.body.userId;

  // get user information from database
  try {
    user = await User.findById(userId);
  } catch (err) {
    return next( new HttpError('finding user failed, please try again later', 500));
  }

  if(!user){
    return next( new HttpError('could not find user for provided id', 404) );
  }

  // get club information from database
  try {
    club = await Club.findOne({clubname: clubname});
  } catch (err){
    return next( new HttpError('finding club failed, please try again later', 500));
  }

  if(!club){
    return next( new HttpError('could not find club with specified clubname', 404));
  }
  console.log(club);
  console.log(user);

  // use transaction, get user in club's user list and club in user's clubs list
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    user.clubs.push(club);
    club.users.push(user);
    await user.save({session: sess});
    await club.save({session: sess});
    await sess.commitTransaction();
  }catch(err){
    console.log(err);
    return next( new HttpError('joining club failed please try again later', 500));
  }
  res.status(201).json({message: "Joined club!"});
}

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      403
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      'Could not log you in, please check your credentials and try again.',
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      403
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      'supersecret_dont_share',
      { expiresIn: '1h' }
    );
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  res.json({
    userId: existingUser.id,
    email: existingUser.email,
    token: token, 
    access: existingUser.access
  });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
exports.joinGroup = joinGroup;
