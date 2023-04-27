const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

// DB schema of users
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});
//add username, the hashed password and the salt value
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
