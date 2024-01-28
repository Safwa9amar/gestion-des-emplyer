// src/server/app.js
const express = require("express");
var cors = require("cors");
const authenticate = require("./middleware/authMiddleware");

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
app.use("/api", authenticate, apiRoutes);

//  Auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);
// check if user is authenticated
app.get("/check_auth", authenticate, (req, res) => {
  res.status(200).json({ message: "Authenticated" });
});
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
