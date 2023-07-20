const express = require('express');
const app = express();
const PORT = 6001;
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
const morgan = require('morgan')
app.use(express.json());
app.use(morgan("default"));
const userRouter = require('./routes/user')
const rootRouter = require('./routes/root');
const contactRouter = require('./routes/contact');
const venderRouter = require('./routes/vender');
const vehicleRouter  = require('./routes/vendervehicle');
const pathRouter = require('./routes/path')
const http = require('http');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const fs = require('fs');

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(
        "mongodb+srv://sparksvasim:lh4Vo5FbA3CJ3e1m@social-influencer.sfbg9xi.mongodb.net/anniecab"
    );
    console.log("Database Conneced Successfull");
}
app.use('/profile' , express.static('upload/image'))
app.use('/vender' , express.static('upload/image'))
app.use('/vehicle', vehicleRouter.router);
app.use('/user', userRouter.router);
app.use('/root' , rootRouter.router);
app.use('/contact' , contactRouter.router);
app.use('/vender' , venderRouter.router);
app.use('/path' , pathRouter.router);

app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}.`)
});