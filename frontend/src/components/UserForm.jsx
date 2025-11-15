import React, { useState } from "react";
import { addUser } from "../api/userApi";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;

    await addUser({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Add User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default UserForm;
