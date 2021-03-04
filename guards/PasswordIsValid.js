// *** Guard based on PasswordIsValid util

const PasswordIsValid = require("../utils/PasswordIsValid");

module.exports = async (req, res, next) => {
  const { login, password } = req.body;

  if (await PasswordIsValid(login, password)) next();
  else res.json({ error: "Invalid password." });
};
