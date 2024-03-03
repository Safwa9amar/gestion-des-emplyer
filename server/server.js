// src/server/app.js
const express = require("express");
var cors = require("cors");
const authenticate = require("./middleware/authMiddleware");
const jwt = require("jsonwebtoken");
// const { PrismaClient } = require("./prisma/@prisma/client");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const path = require("path");

const secretKey = process.env.SECRET_KEY;
// const startExpressServer = () => {
const app = express();
const port = 3001;
app.use(
  cors({
    origin: "*", // allow all origins
    // credentials: true,
  })
);
// Middleware setup
app.use(express.json()); // Example middleware for JSON parsing

// Serve static files from the "uploads" folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes setup
// api routes
const apiRoutes = require("./routes/api/index");
app.use(apiRoutes);

//  Auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);
// check if user is authenticated
app.get("/check_auth", authenticate, async (req, res) => {
  const decodedToken = jwt.verify(req.headers.authorization, secretKey);
  const user = await prisma.user.findUnique({
    where: {
      email: decodedToken.email,
    },
  });
  // remove password from user object
  delete user.password;
  res.status(200).json({ user });
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
