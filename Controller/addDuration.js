const DurationModel = require('../model/DurationVisitModel')

module.exports.AddDuration = async function(req,res) {

    let duration = req.body.duration

    let Duration = new DurationModel ({

        "Duration":duration
    });

    await Duration.save();

    res.json({ "msg": "data Added", "data": Duration, "rcode": 200 })
}


