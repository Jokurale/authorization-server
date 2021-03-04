const Token = require("../database/models/Token.model");
const User = require("../database/models/User.model");

module.exports = async function () {
  const userCount = await User.countDocuments({});
  const tokenCount = await Token.countDocuments({});

  const loggedUsers = await Token.find({}).select("login -_id");

  return { userCount, tokenCount, loggedUsers };
};
