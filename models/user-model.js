const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  //User Information
  firstName: { type: String },
  lastName: { type: String },
  preferredName: { type: String },
  password: { type: String },
  phoneNumber: { type: String },
  email: { type: String },
  biography: { type: String },
  imageUrl: { type: String },
  jobTitle: [{ type: String }], //potentially add prior job history with dates
  notifications: [{ type: String }],
});

module.exports = mongoose.model("User", userSchema);
