const _ = require("lodash");
const BookingDetail = require("../models/bookingDetail");
const airportsList = require("../utils/airportsList");
const {
  generateDetails,
  getCity,
  sorting,
} = require("../utils/helperFunctions");

// render search for flights page
module.exports.index = (req, res) => {
  const airports = airportsList.airports;
  res.render("flights/index", { airports });
};

// search flights according to the given params
module.exports.findFlights = (req, res) => {
  const { from, to, date, passengerCount, group } = req.body;
  req.session.details = generateDetails(
    from.toUpperCase(),
    to.toUpperCase(),
    date,
    parseInt(passengerCount),
    group
  );
  res.redirect("/search");
};

// display flights according to the given paramters
module.exports.renderSearch = (req, res) => {
  if (!req.session.details) return res.redirect("/");
  let details = req.session.details;
  details = sorting(details, req.query.sortby);
  res.render("flights/search", { details });
};

// store sessions according to the given paramters
module.exports.storeFlightDetails = (req, res) => {
  req.session.detail = JSON.parse(req.body.detail);
  res.redirect("/review");
};

// render ticket details review page
module.exports.renderReview = (req, res) => {
  if (!req.session.detail) return res.redirect("/search");
  const detail = req.session.detail;
  res.render("flights/review", { detail });
};

// render the travellers' details form and payment details page
module.exports.renderTravellerForm = (req, res) => {
  if (!req.session.detail) return res.redirect("/search");
  const detail = req.session.detail;
  res.render("flights/traveller", { detail });
};

// book tickets and store data in the DB
module.exports.bookTicket = async (req, res) => {
  if (!req.session.detail) return res.redirect("/search");

  const { passengerCount, passengers } = req.session.detail;
  for (let index = 0; index < passengerCount; index++) {
    let userInput =
      req.body.group[index] +
      req.body.fname[index] +
      " " +
      req.body.lname[index];
    passengers.push(_.startCase(_.camelCase(userInput)));
  }

  const bookingDetail = new BookingDetail(req.session.detail);
  bookingDetail.user = req.user._id;
  bookingDetail.isPaid = true;
  await bookingDetail.save();
  req.flash("success", "Your flight tickets have been booked successfully!");
  res.redirect("/bookings");
};

// render show all bookings page
module.exports.showBookings = async (req, res) => {
  const details = await BookingDetail.find({ user: req.user._id });
  res.render("flights/bookings", { details, getCity });
};

// render display boarding-pass page
module.exports.showBoardingPass = async (req, res) => {
  const bookingDetail = await BookingDetail.findById(req.params.id);

  res.render("flights/boarding-pass", { bookingDetail, getCity });
};

// render cancel ticket page
module.exports.renderCancel = async (req, res) => {
  const bookingDetail = await BookingDetail.findById(req.params.id);
  res.render("flights/cancel", { bookingDetail, getCity });
};

// delete flight tickets from DB
module.exports.deleteBookings = async (req, res) => {
  const { id, value } = req.params,
    bookingDetail = await BookingDetail.findById(id);

  let passengers = bookingDetail.passengers;
  passengers.splice(value, 1);
  if (passengers.length > 0) {
    await BookingDetail.findByIdAndUpdate(id, { passengers });
    req.flash("success", "Your ticket has been cancelled successfully!");
    return res.redirect("/cancel/" + id);
  }
  await BookingDetail.findByIdAndDelete(id);
  req.flash("success", "Your ticket has been cancelled successfully!");
  res.redirect("/bookings");
};
