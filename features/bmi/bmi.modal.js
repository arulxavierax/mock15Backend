const { Schema, model } = require("mongoose");

const bmiSchema = new Schema({
  height: { type: Number, require: true },
  weight: { type: Number, require: true },
});

const BMI = model("bmi", bmiSchema);

module.exports = BMI;
