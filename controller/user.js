const model = require('../model/user');
const User = model.user;
const mongoose = require('mongoose');

exports.signup = (req, res) => {
    const data = req.body;
    const user = new User(data);
    if (req.body.password === req.body.confirmpassword) {
        user
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
};

exports.signin = async(req,res) =>{
    const data = req.body ;
    try {
        await User.findOne({email : data.email}).then((result ,err )=>{
            res.status(200).json({message:"Logged In SuccesFully." , result: result})
        });
    } catch (error) {
        console.log(err);
        res.status(400).json({err})
    }
}

exports.updateUser = async(req,res)=>{
    const id = req.params.id ;
    try {
        const result = await User.updateOne({_id : req.params.id},{$set : req.body})
        res.status(200).json({message:"Updated Successfully."})  
    } catch (error) {
        res.status(400).json({message:"Daat Was Not Updated."})
    }
}

exports.deleteUser = async (req,res)=>{
    const id = req.params.id;
    try {
        const result = await User.deleteOne({_id : req.params.id})
        res.status(200).json({message:"Delete User Successfully"})   
    } catch (error) {
        res.status(400).json({message:"User Not Deleted"});
    }
}

exports.getUsers = async (req,res) =>{
    const result = await User.find();
    try {
        res.status(200).json({message:"User Data" , data : result});   
    } catch (error) {
        res.status(400).json({message:"User Data Not Found"});
    }
}

exports.getUserByID = async(req,res)=>{
    const id = req.params.id
    try {
        const result = await User.findById(id);
        res.status(200).json({message : "User Details" , data : result})
    } catch (error) {
        res.status(400).json({message : "Data Not Found."})
    }
}