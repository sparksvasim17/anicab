const express = require('express');
const app = express();
const vehicleController = require('../controller/vendervehicle');
const upload = require('../middleware/imageUpload');
const router = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

router.post('/vehicle' ,upload.upload ,
    vehicleController.vehicle);

exports.router = router ;