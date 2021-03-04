// *** Guard based on HasActiveToken util

const HasActiveToken = require("../utils/HasActiveToken");

module.exports = async (req, res, next) => {
  const { login } = req.body;

  if (!(await HasActiveToken(login))) next();
  else res.json({ error: "Token has been already issued." });
};
