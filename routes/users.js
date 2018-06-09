const express = require("express");
const router = express.Router();

const User = require("../models/user");
const passport = require("passport");
const pjwt = require("jsonwebtoken");

// Register
router.post("/register", function(req, res, next) {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, function(err, user) {
    if (err) {
      res.json({ success: false, msg: "Failed to register user" });
    } else {
      res.json({ success: true, msg: "User successfully registered" });
    }
  });
});

// Authenticate
router.post("/authenticate", function(req, res, next) {
  res.send("Authenticate");
});

// Profile
router.get("/profile", function(req, res, next) {
  res.send("Profile");
});

// Validate
router.get("/validate", function(req, res, next) {
  res.send("validate");
});

module.exports = router;
