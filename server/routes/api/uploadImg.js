const express = require("express");
const fs = require("fs");
// const { body, validationResult } = require("express-validator");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const multer = require("multer");
// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: "./server/uploads", // Set the destination folder for uploaded files
  filename: function (req, file, cb) {
    // Use the original filename for the uploaded file
    // change the name of the file to be unique
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Route for handling image uploads
router.post("/upload", upload.single("image"), (req, res) => {
  // Handle the uploaded file (you can save it to a database, etc.)
  const employeeId = req.body.employeeId;
  const imageUrl = `/uploads/${req.file.filename}`;
  // delete the old image if it exists
  prisma.employee
    .findUnique({
      where: {
        id: Number(employeeId),
      },
    })
    .then((employee) => {
      if (employee.picture) {
        const oldImage = employee.picture.split("/").pop();
        fs.unlink(`./server/uploads/${oldImage}`, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(`Old image ${oldImage} deleted`);
        });
      }
    })
    .catch((error) => {
      console.error("Error getting employee:", error);
    });

  // Use Prisma Client to update the employee's profile image
  prisma.employee
    .update({
      where: {
        id: Number(employeeId),
      },
      data: {
        picture: imageUrl,
      },
    })
    .then((employee) => {
      console.log("Employee updated:", employee);
    })
    .catch((error) => {
      console.error("Error updating employee:", error);
    });
  res.json({ imageUrl });
});

module.exports = router;
