const Joi = require("joi");

const TokenPayloadJoiSchema = Joi.object().keys({
  displayName: Joi.string().required().max(150),
  login: Joi.string().required().min(4).max(50),
  rank: Joi.string()
    .required()
    .lowercase()
    .min(3)
    .max(10)
    .valid("root", "admin", "mod", "user", "employee"),
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
