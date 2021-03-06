const express = require("express");
const { check } = require("express-validator");

const eventsControllers = require("../controllers/events-controllers");

const router = express.Router();

router.post("/", eventsControllers.createEvent);
router.get("/getEvents", eventsControllers.getEvents);
router.get("/:eID", eventsControllers.getEventById);

module.exports = router;
