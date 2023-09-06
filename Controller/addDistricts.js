const DistrictModel = require('../model/DistrictModel')

module.exports.AddDistrict = async function(req,res) {

    let district = req.body.district

    let District = new DistrictModel ({

        "district":district
    });

    await District.save();

    res.json({ "msg": "District Added", "data": District, "rcode": 200 })
}


