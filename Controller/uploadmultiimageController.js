const multer = require('multer')


const mystorage = multer.diskStorage({

    destination : function(req,file,cb){
        cb(null,"/Relatedphoto")
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

},

    // limits : {fileSize:85400}

})


const uploadFile = (req, res) => {
    // Check if a file was uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }
  
    // File uploaded successfully, you can process it here if needed
    return res.status(200).json({ message: 'File uploaded successfully.' });
  };
  

module.exports = {uploadFile}