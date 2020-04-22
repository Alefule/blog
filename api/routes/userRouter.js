const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/userController');
const Auth = require('../auth/local')

router.get('/users', userController.showUsers);
router.get('/user/:id', userController.showOneUser);
router.post('/user/add', userController.addUser);
router.delete('/user/delete/:id', userController.deleteUser);
router.put('/user/update/:id', userController.updateUser);

router.post('/login', Auth.localLogin, userController.authenticate);

module.exports = router;