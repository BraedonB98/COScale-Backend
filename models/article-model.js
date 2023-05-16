const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  name: { type: String },
  number: { type: String },
  date: { type: Date },
  sections: [{ type: mongoose.Types.ObjectId, ref: "Article" }],
});

module.exports = mongoose.model("Article", articleSchema);
