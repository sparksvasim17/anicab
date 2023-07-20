const express = require('express');
const contactController = require('../controller/contact');
const router = express.Router();

router.post('/contact' , contactController.contact)

exports.router = router;