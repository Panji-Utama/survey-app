const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.header("Authorization").split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access Denied, token not found" });
  }

  try {
    const decoded = jwt.verify(token, "secret-key");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    res.status(401).json({ error: "Token is not valid" });
  }
}

module.exports = verifyToken;
