// api/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection (optional, if required for assignment)
mongoose.connect("mongodb+srv://<username>:<password>@cluster0.mongodb.net/comp3123_assignment1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.log("❌ DB connection error:", err));

// Example route
app.get("/", (req, res) => {
    res.json({ message: "API running on Vercel!" });
});

module.exports = app;
