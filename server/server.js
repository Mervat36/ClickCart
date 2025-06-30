const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ debug: false });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ClickCart backend is running ✅");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("🚀 Server running on port " + PORT);
    console.log("✅ MongoDB connected");
    app.listen(PORT);
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));
