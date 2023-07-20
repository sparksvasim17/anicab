const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const venderSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    confrimpassword :{
        type : String,
        required : true
    },
})

exports.vender = mongoose.model('vender' , venderSchema);