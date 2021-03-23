const express = require("express");

const route = express.Router();

route.get("/", async (req, res) => {
  res.header("Content-Type", "application/json");
  res.send({ message: "Service is up and running." });
});

module.exports = route;
