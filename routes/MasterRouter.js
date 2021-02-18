// This files will be used for gathering all new routes in one place

const express = require("express");

const router = express.Router();

router.use("/", (req, res) => {
  res.json({ message: "Server is up and running." });
});

module.exports = router;
