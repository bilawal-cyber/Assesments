// routes.js
const express = require('express');
const router = express.Router();
const controllers = require('./controllers/userController');


// Databse interactions
router.get('/users', controllers.getAllUsers);
router.get('/users/:id', controllers.getUserById);
router.post('/users', controllers.createUser);
router.put('/users/:id', controllers.updateUserById);
router.delete('/users/:id', controllers.deleteUserById);
//



module.exports = router;
