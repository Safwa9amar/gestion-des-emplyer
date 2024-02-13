const express = require("express");
const router = express.Router();
const getEmployeeId = require("./getEmployeeId");
const deleteEmployeeById = require("./deleteEmployeeById");
const getAllEmployees = require("./getAllEmployees");
const updateEmployee = require("./updateEmployee");
const addEmployee = require("./addEmployee");
const payroll = require("./payroll");
const uploadImg = require("./uploadImg");

//  Import the authenticateToken middleware
const authenticateToken = require("../../middleware/authMiddleware");

// Mount the employee routes under the "/api" path
router.use("/api", authenticateToken, getEmployeeId);
router.use("/api", authenticateToken, deleteEmployeeById);
router.use("/api", authenticateToken, getAllEmployees);
router.use("/api", authenticateToken, updateEmployee);
router.use("/api", authenticateToken, addEmployee);
router.use("/api", authenticateToken, payroll);
router.use("/api", authenticateToken, uploadImg);

module.exports = router;
