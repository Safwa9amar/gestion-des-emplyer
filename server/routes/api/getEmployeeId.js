// Initilize express router
const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// get employee by id
router.get("/employees/:id", async (req, res) => {
  try {
    // Use Prisma Client to get all employees
    const employee = await prisma.employee.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    // Respond with the retrieved employees
    res.status(200).json({ employee });
  } catch (error) {
    console.error("Error getting employees:", error);
    res
      .status(500)
      .json({ error: "حدث خطأ ما يرجى تحديث الصفحة واعادة المحاولة" });
  }
});

module.exports = router;
// Path: client/server/routes/api/getEmployeeId.js
