const mongoose = require('mongoose');
const { Schema } = require('mongoose')

const rootSchema = new Schema({

    vender_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'vender'
    },

    from :{
        type : String,
        required : true
    },
    to :{
        type : String,
        required : true
    },
    date:{
        type : String,
        required : true
    },
    time :{
        type : String,
        required : true
    }
});

exports.root = mongoose.model('root' , rootSchema);