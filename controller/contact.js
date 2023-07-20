const model = require('../model/contact');
const contact = model.contact;
const mongoose = require ('mongoose');

exports.contact = (req,res)=>{
    const data = req.body;
    const user = new contact(data);
    user.save()
    .then((doc)=>{
        res.status(201).json(doc);
    })
    .then((err)=>{
        res.status(400).json(err)
    })
}