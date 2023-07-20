const express = require('express');
const venderController = require('../controller/vender');
const router = express.Router();

router.post('/signup' , venderController.signup);
router.post('/login' , venderController.login);

exports.router = router;