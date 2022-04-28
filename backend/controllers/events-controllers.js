const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Club = require("../models/club");
const Event = require("../models/event");

const getEventById = async (req, res, next) => {
  const eventId = req.params.eID;

  let event;

  try {
    event = await Event.findById(eventId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a club.",
      500
    );
    return next(error);
  }

  if (!event) {
    const error = new HttpError(
      "Could not find club for the provided id.",
      404
    );
    return next(error);
  }

  res.json({ event: event.toObject({ getters: true }) });
};

const getEvents = async (req, res, next) => {
  let events;
  try {
    events = await Event.find({});
  } catch (err) {
    const error = new HttpError(
      "Fetching events failed, please try again later.",
      500
    );
    return next(error);
  } //return default javascript object, setting gettings to true to remove underscore
  res.json({
    events: events.map((event) => event.toObject({ getters: true })),
  });
};

const createEvent = async (req, res, next) => {
  const { clubId, eventname, year, month, day, hour, location, image } =
    req.body;
  console.log("+++++++++++++++++ POINT 0 ");
  let images = [];
  let clubID = mongoose.Types.ObjectId(clubId);
  console.log("+++++++++++++++++ POINT 1/2 ");
  let newID = "62377e3d07d81d49d4e5ea1a";
  images.push(image);
  let date_string = year + "-" + month + "-" + day;
  //let date = new Date(date_string);
  let club;
  console.log("+++++++++++++++++ POINT 1 ");
  try {
    club = await Club.findById(clubID);
  } catch (err) {
    return next(
      new HttpError("Something went wrong, could not find club by id.", 500)
    );
  }
  console.log("+++++++++++++++++ POINT 2 ");
  if (!club) {
    return next(new HttpError("Could not find club for pvoided id", 404));
  }
  console.log("+++++++++++++++++ POINT 3 ");
  //const clubObj = club.toObject({ getters: true });
  const createdEvent = new Event({
    eventname,
    date: date_string,
    time: hour,
    location,
    images,
    club: newID,
  });

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdEvent.save({ session: sess });
    club.events.push(createdEvent);
    await club.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    return next(new HttpError("creating event failed, please try again"), 500);
  }
  res.status(201).json({ message: "created event" });
};

exports.createEvent = createEvent;
exports.getEvents = getEvents;
exports.getEventById = getEventById;
