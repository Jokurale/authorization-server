const express = require("express");

const route = express.Router();

const statistics = require("../tools/ServerStatistics");

route.get("/", async (req, res) => {
  const stats = await statistics();

  const output = { message: "Service is up and running.", stats };

  res.header("Content-Type", "application/json");
  res.send(output);
});

module.exports = route;
