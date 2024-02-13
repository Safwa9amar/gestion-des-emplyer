// Initilize express router
const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/employees", async (req, res) => {
  try {
    // Use Prisma Client to get all employees
    const employees = await prisma.employee.findMany();
    // Respond with the retrieved employees
    res.status(200).json({ employees });
  } catch (error) {
    console.error("Error getting employees:", error);
    res
      .status(500)
      .json({ error: "حدث خطأ ما يرجى تحديث الصفحة واعادة المحاولة" });
  }
});

module.exports = router;
