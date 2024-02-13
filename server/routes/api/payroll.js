// Initilize express router
const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// get employee by id
router.get("/employees/:id/payroll", async (req, res) => {
  console.log("Getting payroll by employee id", req.params.id);
  return res.status(200).json({ payroll: { id: 1 } });
  try {
    // get payroll by employee id
    const payroll = await prisma.payroll.findFirst({
      where: {
        employeeId: Number(req.params.id),
      },
    });
    // Respond with the retrieved payroll
    res.status(200).json({ payroll });
  } catch (error) {
    console.error("Error getting employees:", error);
    res
      .status(500)
      .json({ error: "حدث خطأ ما يرجى تحديث الصفحة واعادة المحاولة" });
  }
});

module.exports = router;
// Path: client/server/routes/api/getEmployeeId.js
