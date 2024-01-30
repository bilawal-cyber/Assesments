// authMiddleware.js
const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key';

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Token not provided' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden - Invalid or expired token' });
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
