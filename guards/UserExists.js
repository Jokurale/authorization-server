const UserExists = require("../utils/UserExists.js");

module.exports = async (req, res, next) => {
  const { login } = req.body;

  if (await UserExists(login)) next();
  else res.json({ error: "User does not exist." });
};
