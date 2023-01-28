const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  return mongoose.connect(
    `mongodb+srv://backend:${process.env.DATABASE_PASSWORD}@cluster0.q91idqa.mongodb.net/?retryWrites=true&w=majority`
  );
};

module.exports = dbConnect;
