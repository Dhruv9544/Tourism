const DistrictModel = require('../model/DistrictModel')


module.exports.getAllDistricts = function (req, res) {

    
 
          DistrictModel.find().then((data) => {
             res.json({ "msg": "retrived", "data": data, "rcode": 200 })
         }).catch((err) => {
             console.log(err);
             res.json({ "msg": "SMW", "rcode": -9, "data": err })
         })
 
        
 }