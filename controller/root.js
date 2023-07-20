const { Db } = require('mongodb');
const model = require('../model/root');
const Root = model.root;
const mongoose = require('mongoose');

exports.path = (req, res) => {
  const data = req.body;
  const user = new Root(data);

  user.save()
    .then((doc) => {
      res.status(201).json(doc);
    })
    .then((err) => {
      console.log(err);
    });
};

exports.matchpathss = async(req, res) => {
  const data = req.body
  try {
      await Root.find({ from: data.from })
      .then((result, err) => {
          console.log(err)
          res.status(200).json({message:'Trip is verified please check details' , data:result})
      })
  }
  catch (err) {
      console.log(err);
      res.status(400).json(err)
 }
}

exports.matchpath = async (req, res) => {
  try {
    const { from } = req.body;
    const to = req.body.to
    //validation
    if (!from || !to) {
      return res.status(404).send({
        success: false,
        message: "Please Enter thr right destination and departure.",
      });
    }
    
    const user = await Root.findOne({ from });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Departure is not registerd",
      });
    }
    const match = to.$match(Root.to)
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Destination",
      });
    }
    res.status(200).send({
      success: true,
      message: "details fetch successfully",
      user: {
        _id: Root._id,
        from: Root.from,
        to: Root.to,
        departuretime: Root.departuretime,
        arrivaltime: Root.arrivaltime,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in finding data.",
      error,
    });
  }
};

exports.allRides = async(req,res)=>{
  try {
    const rides = await Root.find();
    res.json({success:1,message:'Data',rides})
   } catch (error) {
        res.json({success:0,message:'data not Found'})
   }
}