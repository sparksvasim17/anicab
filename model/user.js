const mongoose = require ('mongoose');
const { Schema } = require ('mongoose');

const userSchema = new Schema({

    firstName  : {
        type : String,
        required : true
    },
    lastName : {
        type : String ,
         required : true
    },
    email :{
        type : String, 
        required : true
    },
    password : {
        type : String,
        required : true,
    },
    confirmpassword :{
        type : String,
        required : true
    }
})

exports.user = mongoose.model('user' , userSchema)