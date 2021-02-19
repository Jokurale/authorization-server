const express = require("express");

const TokenPayloadJoiSchema = require("../data-validators/TokenPayloadValidator");

const route = express.Router();

route.use("/", (req, res) => {
  const ValdationResult = TokenPayloadJoiSchema.validate({
    DisplayName: "Michał Podsiadły",
    Login: "root",
    Rank: "root",
  });

  if (ValdationResult.error) res.json({ message: "Payload invalid." });
  else res.json(ValdationResult.value);
});

module.exports = route;
