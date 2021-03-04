const User = require("../database/models/User.model");

module.exports = async function (login) {
  login = login.trim();

  const user = await User.countDocuments({ login });

  if (user > 0) return true;
  return false;
};
