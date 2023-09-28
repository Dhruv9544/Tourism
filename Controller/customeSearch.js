const FormdataModel = require("../model/FormDataModel");

module.exports.CustomeSearch = async function (req, res) {
  try {
    const query = req.query.q;
    var data;
    if (!query) {
      return res.status(200).json({
        status: "Success",
        data: data,
      });
    }

    // const data = await FormdataModel.find({
    var data = await FormdataModel.aggregate([
      {
        $match: {
          $or: [
            { DestinationName: { $regex: query, $options: "i" } },
            { MainAttractions: { $regex: query, $options: "i" } },
            { Location: { $regex: query, $options: "i" } },
            { Category: { $regex: query, $options: "i" } },
            { Season: { $regex: query, $options: "i" } },
            { District: { $regex: query, $options: "i" } },
            // { District: { $regex: query, $options: "i" } },
          ],
        },
      },
    ]);
    res.status(200).json({
      status: "success",
      results: data.length,
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      err: err.message,
    });
  }
};
