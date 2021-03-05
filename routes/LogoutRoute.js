// *** Boilercode
const express = require("express");
const route = express.Router();

// *** Importing all the required route-guards
const ContainsAuthToken = require("../guards/ContainsAuthToken");

// *** Importing Token manager
const { revoke } = require("../tools/Token.tools");

// *** Importing running configuration
require("dotenv").config({ path: "../.env" });

route.post("/logout", [/* Request */ ContainsAuthToken], async (req, res) => {
  const token = req.token;

  const result = await revoke(token);

  if (result.deletedCount > 0)
    res.json({ message: "Successfully logged out." });
  else res.json({ error: "Server could not log you out." });
});

module.exports = route;
