const express = require("express")
const file = require("./Middleware/upload")
const bodyparser = require("body-parser")
const FormDataController = require('./Controller/FormDataController')
const multer = require("multer");
const uploadImageController = require('./Controller/uploadimageController')
const uploadMultiImageController = require('./Controller/uploadmultiimageController')

// const upload = multer({ dest: '/images/Thumbnail' })

require('./config/dbconfig').getDbConnection()

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.json())


const mystorage = multer.diskStorage({

    destination : function(req,file,cb){
        cb(null,`${__dirname}/uploads`)
    },

    filename : function(req,file,cb){
        cb(null,file.originalname)
    }


})

const upload = multer({storage : mystorage , fileFilter:function(req,file,cb){

    if(file.mimetype == "image/jpeg" || file.mimetype == "image/x-png"){
        cb(null,true)
    }
    else
    {
        cb(null,false)
        cb(new Error ("valid extension are jpeg/png"))
    }

}

})


// app.post('/formData', upload.single('Thumbnail'),FormDataController.TourData)
// app.post('/formData', upload.single('Thumbnail'),function(req,res){

//     console.log(req.file);
//     res.json({msg:"file uploaded",status:200,data:"file uploaded"})
// })

app.post('/uploadsinglephoto', upload.single('Thumbnail'),uploadImageController.uploadFile)
app.post('/uploadmultiphoto',upload.array('photos',12),uploadMultiImageController.uploadFile)
app.post('/formData',FormDataController.TourData)
app.listen(9999)
console.log("server started at 9999");