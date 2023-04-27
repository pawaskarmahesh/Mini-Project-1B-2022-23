const express = require("express");
const router = express.Router();
const _ = require("lodash");
const passport = require("passport");
const catchAsync = require("../utils/catchAsync");
const {
  isLoggedIn,
  validateSearchData,
  validateBookingId,
  validateCardData,
} = require("../utils/middlewares");

const flight = require("../controllers/flight");

// routing flights according to the given params
router
  .route("/")
  .get(flight.index)
  .post(validateSearchData, flight.findFlights);

// routing flights according to the given paramters and store sessions according to the given paramters
router
  .route("/search")
  .get(flight.renderSearch)
  .post(flight.storeFlightDetails);

// routing ticket details review page
router.route("/review").get(flight.renderReview);

// routing travellers' details , book tickets and make payments page
router
  .route("/traveller")
  .get(flight.renderTravellerForm)
  .post(isLoggedIn, validateCardData, catchAsync(flight.bookTicket));

// routing all bookings page
router.route("/bookings").get(isLoggedIn, catchAsync(flight.showBookings));

// routing boarding-pass page
router
  .route("/boarding-pass/:id")
  .get(isLoggedIn, validateBookingId, catchAsync(flight.showBoardingPass));

// rendering cancel ticket page
router
  .route("/cancel/:id")
  .get(isLoggedIn, validateBookingId, catchAsync(flight.renderCancel));

// route delete flight tickets from DB
router.route("/cancel/:id/:value").post(
  isLoggedIn,
  validateBookingId,
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/bookings",
  }),
  catchAsync(flight.deleteBookings)
);

module.exports = router;
