const User = require("../database/models/User.model");
const { verify } = require("../tools/Password.tools");

module.exports = async function (login, password) {
  login = login.trim();
  password = password.trim();

  const user = await User.findOne({ login });

  if (user) return await verify(password, user.password);
  return false;
};
