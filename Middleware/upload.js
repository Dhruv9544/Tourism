const multer = require("multer");
const path = require("path")


const mystorage = multer.diskStorage({

    destination : function(req,file,cb){
        cb(null,"/images/Thumbnail")
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


const mystorage1 = multer.diskStorage({

    destination : function(req,file,cb){
        cb(null,"/images/relatedimages")
    },

    filename : function(req,file,cb){
        cb(null,file.originalname)
    }


})

const multi_upload= multer({storage : mystorage1 , fileFilter:function(req,file,cb){

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

// module.exports.upload = upload
// module.exports.mystorage = mystorage
// module.exports.multi_upload=multi_upload
// module.exports.mystorage1 = mystorage1
module.exports = {upload,multi_upload,mystorage,mystorage1}