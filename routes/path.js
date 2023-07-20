const express = require('express');
const pathController = require('../controller/path');
const router = express.Router();

router.post('/roots' , pathController.root);

exports.router = router ;