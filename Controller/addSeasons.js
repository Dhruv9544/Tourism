const SeasonModel = require('../model/SeasonModel')

module.exports.AddSeason = async function(req,res) {

    let season = req.body.season
    console.log(season);

    let Season = new SeasonModel ({

        "Season":season
    });

    await Season.save();

    res.json({ "msg": "season added", "data": Season, "rcode": 200 })
}
