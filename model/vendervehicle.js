const mongoose = require('mongoose')
const  { Schema } = require('mongoose');

const vehicleSchema = new Schema({
    image :{
        type : String,
        required : true
    },
    vehiclename :{
        type : String,
        required : true
    },
    vehicletype :{
        type : String,
        required : true
    },
    vendername :{
        type : String,
        required : true
    },
    venderimage :{
        type : String,
        required : true
    },
})

exports.vehicle = mongoose.model('vehicle', vehicleSchema)