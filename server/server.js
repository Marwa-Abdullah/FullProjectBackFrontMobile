const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./Routes/userRoutes");
const postRoutes = require("./Routes/postRoutes");
const commentRoutes = require("./Routes/commentRoutes");

const app = express();
app.use(express.json());
app.use(cors());




mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));





app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
