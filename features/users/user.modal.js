const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const User = model("user", userSchema);

module.exports = User;
