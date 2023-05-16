const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  name: { type: String },
  number: { type: String },
  date: { type: Date },
  title: { type: mongoose.Types.ObjectId, ref: "Title" },
  sections: [{ type: mongoose.Types.ObjectId, ref: "Section" }],
});

module.exports = mongoose.model("Article", articleSchema);
