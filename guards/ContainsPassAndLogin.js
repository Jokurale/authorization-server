// *** Standalone guard

module.exports = (req, res, next) => {
  if (req.body.login && req.body.password) next();
  else res.json({ error: "Missing parameter." });
};
