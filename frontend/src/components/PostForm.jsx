import React, { useState } from "react";
import { addPost } from "../api/postApi";

function PostForm() {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId || !title || !content) return;

    await addPost({ userId, title, content });
    setUserId("");
    setTitle("");
    setContent("");
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Add Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}

export default PostForm;
