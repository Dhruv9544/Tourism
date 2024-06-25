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

// module.exports.FilterPlaces = async function (req, res) {
//   try {
//     const category = req.query.Category;
//     const season = req.query.Season;
//     const district = req.query.district;
//     const duration = req.query.DurationOfVisit;
//     const GetThereByBus = req.query.GetThereByBus;
//     const GetThereByTrain = req.query.GetThereByTrain;
//     const GetThereByPlane = req.query.GetThereByPlane;
//     const location = req.query.Location;

//     const query = {};
//     if (category) {
//       query.Category = category;
//     }

//     if (season) {
//       query.Season = season;
//     }

//     if (district) {
//       query.District = district;
//     }

//     if (duration) {
//       query.DurationOfVisit = duration;
//     }

//     if (GetThereByBus) {
//       query.GetThereByBus = GetThereByBus;
//     }

//     if (GetThereByTrain) {
//       query.GetThereByTrain = GetThereByTrain;
//     }

//     if (GetThereByPlane) {
//       query.GetThereByPlane = GetThereByPlane;
//     }

//     if (location) {
//       query.Location = location;
//     }

//     const data = await FormdataModel.find(query);
//     res.status(200).json({
//       status: "success",
//       results: data.length,
//       data: data,
//       rcode: 200,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(200).json({
//       status: "fail",
//       message: err.message,
//       rcode: -9,
//     });
//   }
// };
module.exports.FilterPlaces = async function (req, res) {
  try {
    const {
      Category: category,
      Season: season,
      district,
      DurationOfVisit: duration,
      GetThereByBus,
      GetThereByTrain,
      GetThereByPlane,
      Location: location,
    } = req.query;

    const query = {};
    const filters = {
      category,
      season,
      district,
      duration,
      GetThereByBus,
      GetThereByTrain,
      GetThereByPlane,
      location,
    };

    for (const [key, value] of Object.entries(filters)) {
      if (value) {
        query[key] = value;
      }
    }

    const data = await FormdataModel.find(query);

    res.status(200).json({
      status: "success",
      results: data.length,
      data: data,
      rcode: 200,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "fail",
      message: err.message,
      rcode: -9,
    });
  }
};
