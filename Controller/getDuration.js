const DurationModel = require('../model/DurationVisitModel')


module.exports.getAllDuration = function (req, res) {

    
 
          DurationModel.find().then((data) => {
             res.json({ "msg": "retrived", "data": data, "rcode": 200 })
         }).catch((err) => {
             console.log(err);
             res.json({ "msg": "SMW", "rcode": -9, "data": err })
         })
 
        
 }