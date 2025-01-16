// middleware/authenticateToken.js
import jwt from "jsonwebtoken";

const jwteduverse = "jwteduverse";

// const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  // Check for token in 'Authorization' header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  // Replace 'YOUR_SECRET_KEY' with your actual secret key
  jwt.verify(token, "jwteduverse", (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    // Attach decoded user info to req for later use
    req.user = user;
    next();
  });
}

export default authenticateToken;