const express = require('express');
const userController = require('../controller/user');
const router = express.Router();

router.post('/signup' , userController.signup);
router.post('/login' , userController.signin);
router.patch('/update/:id' , userController.updateUser);
router.delete('/delete/:id' , userController.deleteUser);
router.get('/users' , userController.getUsers);
router.get('/user/:id' , userController.getUserByID);


exports.router = router;