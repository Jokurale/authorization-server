// This files will be used for gathering all new routes in one place
// Predefined routes only

const express = require("express");

const router = express.Router();

// ** All needed routes

const IndexRoute = require("./IndexRoute");
const LoginRoute = require("./LoginRoute");

// ** End of all needed routes

// ! Route actual addition
router.use([LoginRoute, IndexRoute]);

module.exports = router;
