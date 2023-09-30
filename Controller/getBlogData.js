const { BlogData } = require("../model/BlogDataModel");

module.exports.getBlogData = async function (req, res) {
  try {
    const data = await BlogData.find(req.query);

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
