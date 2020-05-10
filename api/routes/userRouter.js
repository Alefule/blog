const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

const userController = require('../controllers/userController');

router.get('/users', authController.authorizeUser, userController.showUsers);
router.get('/user/:id', userController.showOneUser);
router.post('/user/add', userController.addUser);
router.delete('/user/delete/:id', userController.deleteUser);
router.put('/user/update/:id', userController.updateUser);

router.post('/login', authController.authenticateUser);

module.exports = router;