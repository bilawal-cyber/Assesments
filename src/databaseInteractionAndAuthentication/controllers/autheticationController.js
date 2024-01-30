// loginController.js
const jwt = require('jsonwebtoken');

const package = require('../../../package.json')

const login = (req, res) => {
  const { username, password } = req.body;

  // Replace this with your actual authentication logic
  if (username === 'exampleUser' && password === 'examplePassword') {
    // Generate JWT token
    const token = jwt.sign({ username }, package.secretKey, { expiresIn: '15min' });

    res.json({ token });
  } else {
    res.status(401).json({ error: 'Unauthorized - Invalid credentials' });
  }
};


// protectedRouteController.js
const protectedResource = (req, res) => {
    res.json({ message: 'This is a protected resource', user: req.user });
};

module.exports = { login, protectedResource };
