const mongoose = require("mongoose");

const collectionName = "geo";
const collection = mongoose.connection.collection(collectionName);

module.exports.getGeoData = async function (req, res) {
  try {
    const collectionName = "geo";
    const collection = mongoose.connection.collection(collectionName);
    const data = await collection.find({}).toArray();

    res.json({
      data: data,
      msg: "data retrived",
      rcode: 200,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Internal server error",
      rcode: 500,
    });
  }
};
