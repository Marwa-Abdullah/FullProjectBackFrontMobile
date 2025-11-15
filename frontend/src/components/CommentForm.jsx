import React, { useState } from "react";
import { addComment } from "../api/commentApi";

function CommentForm() {
  const [userId, setUserId] = useState("");
  const [postId, setPostId] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId || !postId || !text) return;

    await addComment({ userId, postId, text });
    setUserId("");
    setPostId("");
    setText("");
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Add Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Post ID"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
