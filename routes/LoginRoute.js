const express = require("express");

const route = express.Router();

const ContainsPassAndLogin = require("../guards/ContainsPassAndLogin");
const UserExists = require("../guards/UserExists");
const PasswordIsValid = require("../guards/PasswordIsValid");
const HasNoActiveToken = require("../guards/HasNoActiveToken");

const TokenTools = require("../tools/Token.tools");

require("dotenv").config({ path: "../.env" });

route.post(
  "/login",
  [
    /* Request */ ContainsPassAndLogin,
    /* and */ UserExists,
    /* and user's */ PasswordIsValid,
    /* and user */ HasNoActiveToken,
  ],
  async (req, res) => {
    const { login } = req.body;

    const tokens = await TokenTools.generate(login);

    res.json(tokens);
  }
);

module.exports = route;
