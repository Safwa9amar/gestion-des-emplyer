// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const secretKey = process.env.SECRET_KEY;
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. Token not provided." });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authenticate;
