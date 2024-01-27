// src/server/app.js
const express = require("express");
var cors = require("cors");

// const startExpressServer = () => {
const app = express();
const port = 3001;
app.use(
  cors({
    origin: "http://localhost:3000",
    // credentials: true,
  })
);
// Middleware setup
app.use(express.json()); // Example middleware for JSON parsing

// Routes setup
const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

const server = app.listen(port, () => {
  console.log(`Express server is running at http://localhost:${port}`);
});

// Handle cleanup on server shutdown
process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Express server closed");
  });
});
// };

// module.exports = startExpressServer;
