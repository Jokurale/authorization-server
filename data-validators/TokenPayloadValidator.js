const Joi = require("joi");

const TokenPayloadJoiSchema = Joi.object().keys({
  DisplayName: Joi.string().required().max(150),
  Login: Joi.string().required().min(4).max(50),
  Rank: Joi.string().required().min(0).max(20),
});

module.exports = TokenPayloadJoiSchema;

// *** Example usage inside IndexRoute:
// const express = require("express");

// const TokenPayloadJoiSchema = require("../data-validators/TokenPayloadValidator");

// const route = express.Router();

// route.use("/", (req, res) => {
//   const ValdationResult = TokenPayloadJoiSchema.validate({
//     DisplayName: "Michał Podsiadły",
//     Login: "root",
//     Rank: "root",
//   });

//   if (ValdationResult.error) res.json({ message: "Payload invalid." });
//   else res.json(ValdationResult.value);
// });

// module.exports = route;
