const FormdataModel = require("../model/FormDataModel");

module.exports.GetAllPlaces = async function (req, res) {
  try {
    const data = await FormdataModel.find(req.query);

    res.json({
      results: data.length,
      data: data,
      msg: "data retrived",
      rcode: 200,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Internal server error",
      rcode: 500,
    });
  }
};

module.exports.GetAllPlacesbySeason = async function (req, res) {
  try {
    const season = req.query.season.split(",");

    const data = await FormdataModel.find({
      Season: { $all: season },
    });
    //  const data = (await FormdataModel.find()).filter({Seaosn:season});

    res.json({
      results: data.length,
      data: data,
      msg: "data retrived",
      rcode: 200,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Internal server error",
      rcode: 500,
    });
  }
};
