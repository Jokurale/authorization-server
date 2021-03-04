const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(
      "[Mongo DB Atlas] Connection with DBaaS established successfully."
    );
  }
);

module.exports = mongoose;
