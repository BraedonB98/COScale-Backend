const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  name: { type: String },
  number: { type: String },
  date: { type: Date },
  title: { type: mongoose.Types.ObjectId, ref: "Title" },
  article: { type: mongoose.Types.ObjectId, ref: "Article" },
  text: { type: string },
  cases: { type: mongoose.Types.ObjectId, ref: "Case" },
});

module.exports = mongoose.model("Section", sectionSchema);
