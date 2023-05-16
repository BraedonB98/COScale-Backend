const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const titleSchema = new Schema({
  name: { type: String },
  number: { type: String },
  date: { type: Date },
  articles: [{ type: mongoose.Types.ObjectId, ref: "Article" }],
});

module.exports = mongoose.model("Title", titleSchema);
