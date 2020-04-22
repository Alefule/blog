const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/users', userController.showUsers);
router.get('/user/:id', userController.showOneUser);
router.post('/user/add', userController.addUser);
router.delete('/user/delete/:id', userController.deleteUser);
router.put('/user/update/:id', userController.updateUser);

module.exports = router;