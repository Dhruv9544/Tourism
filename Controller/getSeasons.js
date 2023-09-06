const SeasonModel = require('../model/SeasonModel')


module.exports.getAllSeasons = function (req, res) {

    
 
          SeasonModel.find().then((data) => {
             res.json({ "msg": "retrived", "data": data, "rcode": 200 })
         }).catch((err) => {
             console.log(err);
             res.json({ "msg": "SMW", "rcode": -9, "data": err })
         })
 
        
 }