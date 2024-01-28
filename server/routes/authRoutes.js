// authRoutes.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const secretKey = process.env.SECRET_KEY;

// Mock database or use a database like MongoDB to store user information
router.post("/register", async (req, res) => {
  const { fullName, username, password, email, phone, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      fullName,
      username,
      password: hashedPassword,
      email,
      phone,
      role,
    },
  });
  console.log(user);

  res.status(201).json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ email }, secretKey, { expiresIn: "1h" });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
