// authRoutes.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const secretKey = process.env.SECRET_KEY;

// Mock database or use a database like MongoDB to store user information
router.post("/add-user", async (req, res) => {
  const { role, password, phone, firstName, email, lastName } = req.body;
  // check if user already exists
  const userExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  // hash password

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      fullName: firstName + " " + lastName,
      username: firstName + "_" + lastName,
      role,
      password: hashedPassword,
      phone,
      email,
    },
  });
  console.log(user);

  res.status(201).json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
  const { email, password, rememberMe } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ email }, secretKey, {
      expiresIn: rememberMe ? "7d" : "1h",
    });
    res.status(200).json({ token });
  } else {
    res
      .status(401)
      .json({ message: "خطأ في البريد الإلكتروني أو كلمة المرور" });
  }
});

// update user
router.put("/edit-user/:id", async (req, res) => {
  const { role, password, phone, firstName, email, lastName } = req.body;
  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    // Use Prisma Client to get all employees
    const user = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        fullName: firstName + " " + lastName,
        username: firstName + "_" + lastName,
        role,
        password: hashedPassword,
        phone,
        email,
      },
    });
    // Respond with the retrieved employees
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error getting employees:", error);
    res
      .status(500)
      .json({ error: "حدث خطأ ما يرجى تحديث الصفحة واعادة المحاولة" });
  }
});
// get users list
router.get("/users", async (req, res) => {
  try {
    // Use Prisma Client to get all employees
    const users = await prisma.user.findMany();
    // Respond with the retrieved employees
    res.status(200).json({ users });
  } catch (error) {
    console.error("Error getting employees:", error);
    res
      .status(500)
      .json({ error: "حدث خطأ ما يرجى تحديث الصفحة واعادة المحاولة" });
  }
});
// get user by id
router.get("/users/:id", async (req, res) => {
  try {
    // Use Prisma Client to get all employees
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    // Respond with the retrieved employees
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error getting employees:", error);
    res
      .status(500)
      .json({ error: "حدث خطأ ما يرجى تحديث الصفحة واعادة المحاولة" });
  }
});
module.exports = router;
