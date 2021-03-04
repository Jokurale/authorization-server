const jwt = require("jsonwebtoken");
const Tokens = require("../database/models/Token.model");
const User = require("../database/models/User.model");
require("dotenv").config({ path: "../.env" });

module.exports = {
  /**
   * Function generates new tokens (refresh and access) based on login and actual database-data.
   * @requires GUARDS - This function needs external route guards to ensure data is valid.
   * @param {string} login - Login for which new token is being requested.
   * @returns {object} New, valid token set.
   */
  generate: async (login) => {
    const user = await User.findOne({ login });

    const { first_name, last_name, rank } = user;

    const payload = {
      login,
      displayName: first_name + " " + last_name,
      rank,
    };

    // Payload-based access token generation
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS, {
      expiresIn: process.env.JWT_ACCESS_EXPIRY,
    });

    // Payload-based refresh token generation
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH, {
      expiresIn: process.env.JWT_REFRESH_EXPIRY,
    });

    const tokens = { accessToken, refreshToken };

    // Saving new login-token pair to active token's pool
    Tokens({ login, refreshToken }).save();

    return tokens;
  },
};
