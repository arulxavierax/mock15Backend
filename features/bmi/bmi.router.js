const express = require("express");
const BMI = require("./bmi.modal");
const app = express.Router();

app.post("/", async (req, res) => {
  const { height, weight } = req.body;
  const result = weight / (height * 2);
  res.send(result);
});

module.exports = app;
