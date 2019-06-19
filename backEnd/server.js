const express = require("express");
const mongoose = require("mongoose");

const users = require("./route/api/users");
const profile = require("./route/api/profile");
const posts = require("./route/api/posts");

const app = express();

//DB config
const db = require("./config/keys").mongoURI;

//Connect to mongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => {
    console.log(err);
  });

app.get("/", (req, res) => res.send("Hello!!"));

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5500;

app.listen(port, () => {
  `Server is running on port ${port}`;
});
