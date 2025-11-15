const express = require("express");
const Comment = require("../Models/Comment");

const router = express.Router();

router.post("/add", async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.json(comment);
});

router.get("/:postId", async (req, res) => {
  const comments = await Comment.find({ postId: req.params.postId })
    .populate("userId");
  res.json(comments);
});

module.exports = router;
