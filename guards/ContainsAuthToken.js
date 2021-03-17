// *** Standalone guard

module.exports = (req, res, next) => {
  if ("authorization" in req.headers) {
    req.token = req.headers.authorization.split(" ")[1];
    next();
  } else {
    res.json({ error: "Token is missing." });
  }
};
