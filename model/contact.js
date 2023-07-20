const mongoose = require('mongoose');
const { Schema } = require ('mongoose')

const contactSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    message : {
        type : String,
        required: true
    }
})

exports.contact = mongoose.model('contact' , contactSchema);