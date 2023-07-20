const model = require('../model/path');
const path = model.path ;
const mongoose = require('mongoose');

exports.root =async (req,res)=>{
    const datatype = new path({});
  

    const data = new path({
        venderName : req.body.venderName,
            destination : req.body.destination,
            departure : req.body.departure,
            date : req.body.data ,
            time : req.body.time,
    });

    await data.save()
    .then((doc) => {
        res.status(201).json(doc);
    }).then((err) => {
        console.log(err)
    });
}