const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Club = require("../models/club");
const User = require("../models/user");

const getAllClubs = async (req, res, next) => {
  let clubs;
  try {
    clubs = await Club.find({});
  } catch (err) {
    return next(new HttpError("something went wrong", 500));
  }
  if (!clubs) {
    return next(new HttpError("can't find any clubs.", 404));
  }

  res.json({ clubs: clubs.map((club) => club.toObject({ getters: true })) });
};

const getClubById = async (req, res, next) => {
  const clubId = req.params.cn;

  let club;

  try {
    club = await Club.findById(clubId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a club.",
      500
    );
    return next(error);
  }

  if (!club) {
    const error = new HttpError(
      "Could not find club for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ club: club.toObject({ getters: true }) });
};

const getClubsByUserId = async (req, res, next) => {
  /*
   * controller method to retrieve all of the clubs belonging to a specific user
   * the user id must be passed in the request body of the user we're interested in.
   * it is of type mongoose ObjectId
   */
  const userId = req.body.userId;

  console.log("USER ID: " + userId);

  let userWithClubs;
  try {
    userWithClubs = await User.findById(userId).populate("clubs");
  } catch (err) {
    console.log(err);
    return next(
      new HttpError("something went wrong, please try again later.", 500)
    );
  }

  console.log(userWithClubs);

  if (!userWithClubs || userWithClubs.clubs.length === 0) {
    console.log(userWithClubs);
    return next(
      new HttpError("Could not find Clubs for provided user id.", 404)
    );
  }
  console.log(userWithClubs.clubs);
  res.json({
    clubs: userWithClubs.clubs.map((club) => club.toObject({ getters: true })),
  });
  //res.json({clubs: 'this is working EEEEEEEEEEEEEEE'});
};

const createClub = async (req, res, next) => {
  /**
   * takes a http request containing a json object of the new club and adds it to the database
   */
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return new HttpError("invalid inputs passed, please check your data.", 422);
  }
  /*
    clubname: formState.inputs.clubname.value,
      description: formState.inputs.description.value,
      image: formState.inputs.image.value,
      club_cat
      
      
      const clubSchema = new Schema({
    clubname: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    clubCat: {type: String, required: true},
    users: [{ type: mongoose.Types.ObjectId, required: false, ref: 'User' }],
    events: [{ type: mongoose.Types.ObjectId, required: false, ref: 'Event' }]
});
*/
  const { clubname, description, image, club_cat } = req.body;
  const createdClub = new Club({
    clubname,
    description,
    image,
    clubCat: club_cat,
    users: [],
    events: [],
  });

  try {
    await createdClub.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError("creating club failed, please try again", 500);
    return next(error);
  }
  res.status(201).json({ message: "created club!" });
};

const updateClub = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return new HttpError("invalid inputs pased, please check your data.", 422);
  }
  const clubname = req.params.cn;
  let club;
  try {
    club = await Club.findOne({ clubname: clubname });
  } catch (err) {
    return next(new HttpError("something went wrong", 500));
  }
  for (const [key, value] of Object.entries(req.body)) {
    club[key] = value;
  }
  try {
    await club.save();
  } catch (err) {
    console.log(err);
    return next(new HttpError("editing club failed", 500));
  }
  res.status(201).json({ message: "update success" });
};

const deleteClub = async (req, res, next) => {
  const clubname = req.params.cn;
  let club;
  try {
    club = await Club.findOne({ clubname: clubname }).populate("users");
  } catch (err) {
    return next(new HttpError("something went wrong", 500));
  }
  if (!club) {
    return next(new HttpError("Could not find club for this id", 404));
  }
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    club.users.forEach(async (user) => {
      user.clubs.pull(club);
      await user.save({ session: sess });
    });
    await club.remove();
    await sess.commitTransaction();
  } catch (err) {
    return next(new HttpError("Something went wrong deleting club", 500));
  }
  res.status(200).json({ message: "deleted club" });
};

exports.getAllClubs = getAllClubs;
exports.createClub = createClub;
exports.getClubById = getClubById;
exports.getClubsByUserId = getClubsByUserId;
exports.updateClub = updateClub;
exports.deleteClub = deleteClub;
