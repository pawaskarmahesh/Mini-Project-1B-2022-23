const BookingDetail = require("../models/bookingDetail");
const airportsList = require("../utils/airportsList");

// check if the user is logged-in or not
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You must be signed in first!");
    return res.redirect("/login");
  }
  next();
};

// validate the user's card details
module.exports.validateCardData = (req, res, next) => {
  let { cardNumber, date, cvvData, userName } = req.body;
  cardNumber = cardNumber.trim();
  cvvData = cvvData.trim();
  userName = userName.trim();
  var letters = /^[A-Za-z ]+$/;
  if (userName && userName.match(letters)) {
  } else {
    req.flash("error", "Please enter your valid name on card.");
    return res.redirect("/traveller");
  }

  if (
    cardNumber.length != 16 ||
    cvvData.length != 3 ||
    isNaN(cardNumber) ||
    isNaN(cvvData) ||
    parseInt(cardNumber) < 0 ||
    parseInt(cvvData) < 0
  ) {
    req.flash("error", "Please enter valid card details.");
    return res.redirect("/traveller");
  }
  // card expiry date validation
  let userDate = date.split(".");
  [userDate[0], userDate[1]] = [userDate[1], userDate[0]];
  userDate = userDate.join(".");

  if (!Date.parse(userDate) || new Date(userDate).getTime() <= Date.now()) {
    req.flash("error", "Please enter valid card details.");
    return res.redirect("/traveller");
  }
  next();
};

// check that the parameters entered for flight searches are accurate
module.exports.validateSearchData = (req, res, next) => {
  const { from, to, date } = req.body;
  const airports = airportsList.airports;
  let flagFrom = false,
    flagTo = false;

  if (from.toUpperCase() === to.toUpperCase()) {
    req.flash("error", "Please select different Destination and Arrival.");
    return res.redirect("/");
  }

  airports.forEach((airport) => {
    if (from.toUpperCase() === airport.IATA_code) flagFrom = true;
    if (to.toUpperCase() === airport.IATA_code) flagTo = true;
    if (flagTo & flagFrom) return;
  });
  if (!flagFrom || !flagTo) {
    req.flash("error", "Please select a valid airport code.");
    return res.redirect("/");
  }

  // date validation
  let userDate = date.split(".");
  [userDate[0], userDate[1]] = [userDate[1], userDate[0]];
  userDate = userDate.join(".");

  if (!Date.parse(userDate) || new Date(userDate).getTime() <= Date.now()) {
    req.flash("error", "Please select a valid date.");
    return res.redirect("/");
  }
  next();
};

// check entered booking id is correct or not
module.exports.validateBookingId = (req, res, next) => {
  BookingDetail.exists(
    { _id: req.params.id, user: req.user._id },
    function (err, result) {
      if (!err) {
        if (result) return next();
      }
      req.flash("error", "Invalid flight booking ID !");
      res.redirect("/bookings");
    }
  );
};
