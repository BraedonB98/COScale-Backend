const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const caseSchema = new Schema({
  name: { type: String },
  dates: [
    {
      appearance: { type: String }, //trial, preliminary, bond, apelit ext
      date: { type: Date },
      location: { type: String }, //maybe eventually have a court house model
    },
  ],
  parties: [{ type: String }],
  district: { type: String },
  court: { type: String }, //Trial, Appeals, Supreme, SCOTUS
  status: { type: String }, //Pending, Trial, Apeal, Decided
  summary: { type: String },
  judge: [{ type: mongoose.Types.ObjectId, ref: "Judge" }],
  statues: [
    {
      title: { type: mongoose.Types.ObjectId, ref: "Title" },
      article: { type: mongoose.Types.ObjectId, ref: "Article" },
      section: { type: mongoose.Types.ObjectId, ref: "Section" },
    },
  ],
});

module.exports = mongoose.model("Case", caseSchema);
