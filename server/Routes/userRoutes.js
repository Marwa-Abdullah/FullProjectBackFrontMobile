const express = require("express");
const User = require("../Models/User");

const router = express.Router();

router.post("/add", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
