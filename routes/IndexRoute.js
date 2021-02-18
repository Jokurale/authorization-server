const express = require("express");

const route = express.Router();

route.use("/", (req, res) => {
  res.json({ message: "Server is up and running." });
});

module.exports = route;
