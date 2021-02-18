// This files will be used for gathering all new routes in one place
// Predefined routes only

const express = require("express");

const router = express.Router();

// ** All needed routes

const IndexRoute = require("./IndexRoute");

// ** End of all needed routes

// ! Route actuall addition
router.use([IndexRoute]);

module.exports = router;
