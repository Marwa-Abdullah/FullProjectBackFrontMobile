import React from "react";
import UserForm from "./components/UserForm.jsx";
import PostForm from "./components/PostForm.jsx";
import CommentForm from "./components/CommentForm.jsx";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
          Simple Blog System
        </h1>

        <div className="space-y-10">
          <UserForm />
          <PostForm />
          <CommentForm />
        </div>
      </div>
    </div>
  );
}

export default App;
