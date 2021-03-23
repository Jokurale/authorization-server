const jwt = require("jsonwebtoken");
const Tokens = require("../database/models/Token.model");
const User = require("../database/models/User.model");
require("dotenv").config({ path: "../.env" });

const meta = {
  iss: "sdly-auth-server",
  aud: "Application base-user",
};

module.exports = {
  generate: async (login) => {
    const user = await User.findOne({ login });

    const { first_name, last_name, rank } = user;

    const payload = {
      login,
      displayName: first_name + " " + last_name,
      rank,
    };

    // Payload-based access token generation
    const accessToken = jwt.sign({ ...meta, payload }, process.env.JWT_ACCESS, {
      expiresIn: process.env.JWT_ACCESS_EXPIRY,
    });

    // Payload-based refresh token generation
    const refreshToken = jwt.sign(
      { ...meta, payload },
      process.env.JWT_REFRESH,
      {
        expiresIn: process.env.JWT_REFRESH_EXPIRY,
      }
    );

    const tokens = { accessToken, refreshToken };

    // Saving new login-token pair to active token's pool
    Tokens({ login, refreshToken }).save();

    return tokens;
  },

  verify: async (token, type = "refresh") => {
    let verificationResult;

    try {
      verificationResult = jwt.verify(
        token,
        type ? process.env.JWT_REFRESH : process.env.JWT_ACCESS
      );
    } catch {
      verificationResult = false;
    }

    return verificationResult;
  },

  revoke: async (refreshToken) => {
    const result = await Tokens.deleteOne({ refreshToken });

    return result;
  },

  refresh: async (login) => {
    const user = await User.findOne({ login });
    const { first_name, last_name, rank } = user;

    const payload = {
      login,
      displayName: first_name + " " + last_name,
      rank,
    };

    const newAccessToken = jwt.sign(
      { ...meta, payload },
      process.env.JWT_ACCESS,
      {
        expiresIn: process.env.JWT_ACCESS_EXPIRY,
      }
    );

    return { accessToken: newAccessToken };
  },
};
