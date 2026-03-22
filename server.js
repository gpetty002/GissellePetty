require("dotenv").config();
const express = require("express");
const path = require("path");
const brownstone = require("brownstone-middleware");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  brownstone({
    apiKey: process.env.BROWNSTONE_API_KEY,
    metering: true,
    enforcement: false, // flip to true when you're ready to block bots
    license: {
      model: "paid",
      rate: "$0.001-per-1000-tokens",
      permission: "allowed",
    },
  }),
);

app.use(express.static(path.join(__dirname, "dist")));

// Catch-all so Vue Router handles client-side routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
