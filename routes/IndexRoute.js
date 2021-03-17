const express = require("express");

const route = express.Router();

const statistics = require("../tools/ServerStatistics");

route.get("/", async (req, res) => {
  const stats = await statistics();

  res.header("Content-Type", "application/json");
  res.send({ message: "Service is up and running.", stats });
});

module.exports = route;
