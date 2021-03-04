const { Schema } = require("mongoose");
const mongoose = require("../Mongo");

mongoose.set("useCreateIndex", true);

module.exports = mongoose.model(
  "Tokens",
  new Schema(
    {
      login: String,
      refreshToken: String,
      createdAt: {
        type: Date,
        default: Date.now(),
        expires:
          60 *
          60 *
          24 /* Each refresh token will expire after 24 hours unless logged out.*/,
      },
    },
    { timestamps: true }
  )
);
