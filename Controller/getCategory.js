const CategoryModel = require('../model/CategoryModel')


module.exports.getAllCategory = function (req, res) {

    
 
          CategoryModel.find().then((data) => {
             res.json({ "msg": "retrived", "data": data, "rcode": 200 })
         }).catch((err) => {
             console.log(err);
             res.json({ "msg": "SMW", "rcode": -9, "data": err })
         })
 
        
 }