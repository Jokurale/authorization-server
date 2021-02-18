// *** Bolier-plate code
const express = require("express");
const app = express();

// *** Request-limiter import
const rateLimit = require("express-rate-limit");

// *** .ENV
require("dotenv").config();

// *** Request-limiter config
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 20,
});

// *** Routes
app.use(require("./routes/MasterRouter.js"));

// *** Addons
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(require("body-parser").json());
app.use(require("morgan")("combined"));
app.use(require("helmet")());
app.use(limiter);

// *** Routing
app.listen(process.env.DEV_PORT || 5000, () => {
  console.log(
    `[Auth Service] Auth service is up and running on port ${
      process.env.DEV_PORT || 5000
    }.`
  );
});
