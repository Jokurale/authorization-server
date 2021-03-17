const { Schema } = require("mongoose");
const mongoose = require("../Mongo");

module.exports = mongoose.model(
  "Users",
  new Schema(
    {
      login: String,
      password: String,
      first_name: String,
      last_name: String,
      email: String,
      gender: String,
      phone: String,
      rank: String,
    },
    { timestamps: true }
  )
);
