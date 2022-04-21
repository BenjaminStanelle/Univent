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
  const { clubId, eventname, year, month, day, hour, location } = req.body;
  let images = [];
  let date_string = year + "-" + month + "-" + day;
  console.log(date_string);
  //let date = new Date(date_string);
  let club;
  try {
    club = await Club.findById(clubId);
  } catch (err) {
    return next(
      new HttpError("Something went wrong, could not find club by id.", 500)
    );
  }
  if (!club) {
    return next(new HttpError("Could not find club for pvoided id", 404));
  }
  const clubObj = club.toObject({ getters: true });
  let club_img = clubObj.image;
  const createdEvent = new Event({
    eventname,
    date: date_string,
    time: hour,
    location,
    images,
    club_img,
    club: clubId,
  });

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdEvent.save({ session: sess });
    console.log("HEEEEEEEEEEEEEEEEEEEEERREE");
    club.events.push(createdEvent);
    await club.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log("ERROR HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(err);
    return next(new HttpError("creating event failed, please try again"), 500);
  }
  res.status(201).json({ message: "created event" });
};

exports.createEvent = createEvent;
exports.getEvents = getEvents;
exports.getEventById = getEventById;