const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// DB schema of booking details
const bookingDetailSchema = new Schema({
  from: String,
  to: String,
  date: String,
  airline: String,
  fromTime: String,
  toTime: String,
  isPaid: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  group: String,
  passengerCount: Number,
  passengers: Array,
  price: Number,
});

module.exports = mongoose.model("BookingDetail", bookingDetailSchema);
