const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  district: { type: String },
  court: { type: String }, //Trial, Appeals, Supreme, SCOTUS
  status: { type: String }, //active, retired, ext
  phone: { type: String },
  email: { type: String },
  mail: { type: String },
  specialty: { type: String }, //if the judge tends to preside over specific types of cases
  education: [
    {
      school: { type: String },
      years: [{ type: String }],
      degree: { type: String },
      awards: [{ type: String }],
    },
  ],
  biography: { type: String },
  cases: [{ type: mongoose.Types.ObjectId, ref: "Case" }],
});

module.exports = mongoose.model("Article", articleSchema);
