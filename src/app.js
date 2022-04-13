require("dotenv").config();
const express = require("express");
const app = express();
const mainRouter = require("./routes");
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello Checkpoint 4 !" });
});

// app.use("/api", mainRouter);

module.exports = app;
