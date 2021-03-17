// *** Tool ensures that invalid JSON requst won't crash whole app
module.exports = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error(
      "[JSON Failsafe] Invalid JSON has been sent. Server has successfully rejected bad request."
    );
    return res.status(400).json({ error: "Invalid JSON." });
  }

  next();
};
