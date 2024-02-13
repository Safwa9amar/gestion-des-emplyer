const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Request validation middleware
const validateAddEmployeeRequest = [
  body("email").isEmail().withMessage("يرجى إدخال بريد إلكتروني صحيح"),
  body("phone").isMobilePhone().withMessage("يرجى الـتأكد من رقم الهاتف"),
  body("firstName").notEmpty().withMessage("يرجى إدخال الاسم الشخصي"),
  body("lastName").notEmpty().withMessage("يرجى إدخال الاسم العائلة"),
  body("birthDate").notEmpty().withMessage("يرجى إدخال تاريخ الميلاد"),
];

// Route to add employees
router.post("/add_employees", validateAddEmployeeRequest, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return 400 bad request and validation errors array
      return res.status(400).json({ error: errors.array() });
    }

    // Extract employee data from the request body

    // check if employee already exists by phone or email
    const employee = await prisma.employee.findFirst({
      where: {
        OR: [{ phone: req.body.phone }, { email: req.body.email }],
      },
    });
    if (employee) {
      return res
        .status(400)
        .json({ error: "الاميل أو رقم الهاتف مسجل بالفعل" });
    }

    // Use Prisma Client to create a new employee
    const newEmployee = await prisma.employee.create({
      data: req.body,
    });

    // Respond with the created employee
    res.status(201).json({ employee: newEmployee });
  } catch (error) {
    console.error("Error creating employee:", error);
    res
      .status(500)
      .json({ error: "حدث خطأ أثناء إضافة الموظف. يرجى المحاولة مرة أخرى." });
  }
});

module.exports = router;
