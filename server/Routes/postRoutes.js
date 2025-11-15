const express = require("express");
const Post = require("../Models/Post");

const router = express.Router();

router.post("/add", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.json(post);
});

router.get("/", async (req, res) => {
  const posts = await Post.find().populate("userId");
  res.json(posts);
});

module.exports = router;
