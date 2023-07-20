const model = require('../model/vender');
const Vender = model.vender;
const mongoose = require('mongoose');

exports.signup = (req,res)=>{
    const data = req.body;
    const vender = new Vender(data);
    if (req.body.password === req.body.confrimpassword) {
        vender
            .save()
            .then((doc) => {
                res.status(201).json(doc);
            })
            .then((err) => {
                console.log(err);
            });
    } else {
        res.status(400).json("Please Enter the Password Same.");
    }
}

exports.login = async(req,res) =>{
    const data = req.body ;
   try {
    await Vender.findOne({email : data.email}).then((result ,err )=>{
        res.status(200).json({message:"Logged In SuccesFully." , result: result})
    }); 
   } catch (error) {
    console.log(err);
    res.status(400).json({err})
   }
}