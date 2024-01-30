// routes.js
const express = require('express');
const router = express.Router();
const controllers = require('./controllers/userController');
const authController = require('./controllers/autheticationController')
const authenticateToken = require('./middlewares/authmiddleware')

// Databse interactions
router.get('/users', controllers.getAllUsers);
router.get('/users/:id', controllers.getUserById);
router.post('/users', controllers.createUser);
router.put('/users/:id', controllers.updateUserById);
router.delete('/users/:id', controllers.deleteUserById);
//


//authetication
router.get('/protected-resource', authenticateToken, authController.protectedResource);

// Login endpoint to generate a JWT token
router.post('/login', authController.login);

module.exports = router;
