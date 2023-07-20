const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const pathschema = new Schema({
    venderName : {
        type :String ,
        required : true
    },
    destination : [{
        type :String ,
        required : true
    }],
    departure : {
        type :String ,
        required : true
    },
    date : {
        type :String ,
        required : true
    },
    time : {
        type :String ,
        required : true
    },

})

exports.path = mongoose.model('path' , pathschema);