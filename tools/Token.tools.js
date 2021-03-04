const jwt = require("jsonwebtoken");
const Tokens = require("../database/models/Token.model");
const User = require("../database/models/User.model");
require("dotenv").config({ path: "../.env" });

module.exports = {
  /**
   * @description Function accepts user login and based on this parameter returns new valid tokenSet, at the same time inserting new tokenSet to the database.
   * @param {string} login Valid user login which will be converted into payload for further ACCESS TOKEN and REFRESH TOKEN
   * @returns {Object} Valid tokenSet Object
   */
  generate: async (login) => {
    const user = await User.findOne({ login });

    const { first_name, last_name, rank } = user;

    const payload = {
      login,
      displayName: first_name + " " + last_name,
      rank,
    };

    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS, {
      expiresIn: process.env.JWT_ACCESS_EXPIRY,
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH, {
      expiresIn: process.env.JWT_REFRESH_EXPIRY,
    });

    const tokens = { accessToken, refreshToken };

    Tokens({ login, refreshToken }).save();

    return tokens;
  },
};
