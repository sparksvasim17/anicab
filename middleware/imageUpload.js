const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: './upload/image',
    
    filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
  })

exports.upload = multer({
    storage: storage,
    limits: {
        fileSize: 100000000
    }
}).fields([{name : 'profile'} , {name : 'vender'}])