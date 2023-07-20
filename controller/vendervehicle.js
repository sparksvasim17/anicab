const model = require('../model/vendervehicle');
const Vehicle = model.vehicle;

exports.vehicle = async (req, res) => {
    const vehicletype = new Vehicle({})
    const vehicles = new Vehicle({
        image: `http://localhost:6001/profile/${req.files.profile[0].filename}`,
        vehiclename: req.body.vehiclename,
        vehicletype: req.body.vehicletype,
        vendername: req.body.vendername,
        venderimage: `http://localhost:6001/vender/${req.files.vender[0].filename}`,
    });

    await vehicles.save()
        .then((doc) => {
            res.status(201).json(doc);
        }).then((err) => {
            console.log(err)
        });
}