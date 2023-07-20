const express = require('express');
const rootController = require('../controller/root');
const router = express.Router();

router.post('/path' , rootController.path);
router.post('/matchpath' , rootController.matchpath);
router.post('/matchpathed' , rootController.matchpathss);
router.get('/allrides' , rootController.allRides);

exports.router = router;