const express = require("express");
const router = express.Router();
const passport = require("passport");
const catchAsync = require("../utils/catchAsync");
const auth = require("../controllers/auth");

// routing register page
router
  .route("/register")
  .get(auth.renderRegister)
  .post(catchAsync(auth.register));

// routing login page
router
  .route("/login")
  .get(auth.renderLogin)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    auth.login
  );
// routing page after logout
router.get("/logout", auth.logout);

module.exports = router;
