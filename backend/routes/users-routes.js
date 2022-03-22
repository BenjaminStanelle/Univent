const express = require("express");
const { check } = require("express-validator");

const usersController = require("../controllers/users-controllers");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.get("/", usersController.getUsers);
router.post(
  "/signup/:aid",
  fileUpload.single("image"),
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.signup
);
router.post("/join/:cn", usersController.joinClub);
router.post("/login", usersController.login);
router.patch("/leave/:cn", usersController.leaveClub);

module.exports = router;
