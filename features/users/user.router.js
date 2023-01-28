const express = require("express");
const User = require("./user.modal");

const app = express.Router();

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const activeUser = await User.findOne({ email });

  if (activeUser) {
    res.status(401).send(`${email} Already Reistered`);
  } else {
    const newUser = await User.create({ name, email, password });
    res.send("User Created");
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const activeUser = await User.findOne({ email, password });
  if (activeUser) {
    res.send({ message: "Signin Successfull", activeUser });
  } else {
    res.status(404).send("Invalid Credentials");
  }
});

module.exports = app;
