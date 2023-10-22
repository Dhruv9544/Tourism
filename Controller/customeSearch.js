const FormdataModel = require("../model/FormDataModel");

module.exports.CustomeSearch = async function (req, res) {
  try {
    const query = req.query.q;
    var data = [];
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

const { model } = require("mongoose");

module.exports.AutoComplete = async function (req, res) {
  try {
    const partialQuery = req.query.q;
    if (!partialQuery) {
      return res.status(200).json({
        status: "Success",
        data: [],
      });
    }

    const suggestions = await FormdataModel.aggregate([
      {
        $match: {
          $or: [
            { DestinationName: { $regex: `^${partialQuery}`, $options: "i" } },
            { Category: { $regex: `^${partialQuery}`, $options: "i" } },
            { Season: { $regex: `^${partialQuery}`, $options: "i" } },
            { District: { $regex: `^${partialQuery}`, $options: "i" } },
          ],
        },
      },
      {
        $project: {
          _id: 0,
          suggestions: [
            {
              field: "DestinationName",
              suggestion: { $ifNull: ["$DestinationName", ""] },
            },
            {
              field: "Category",
              suggestion: { $ifNull: ["$Category", ""] },
            },
            {
              field: "Season",
              suggestion: { $ifNull: ["$Season", ""] },
            },
            {
              field: "District",
              suggestion: { $ifNull: ["$District", ""] },
            },
          ],
        },
      },
      {
        $unwind: "$suggestions",
      },
      {
        $match: {
          "suggestions.suggestion": {
            $regex: `^${partialQuery}`,
            $options: "i",
          },
        },
      },
      {
        $group: {
          _id: "$suggestions.field",
          suggestionsArray: { $addToSet: "$suggestions.suggestion" }, // Use $addToSet instead of $push
        },
      },
      {
        $project: {
          _id: 0,
          suggestions: "$suggestionsArray",
        },
      },
      {
        $limit: 10, // Limit the number of suggestions returned
      },
    ]);

    if (suggestions.length === 0 || !suggestions[0].suggestions) {
      return res.status(200).json({
        status: "Success",
        data: [],
      });
    }

    const suggestionsArray = suggestions[0].suggestions;

    // Extract and flatten the matching values
    const matchingValues = suggestionsArray
      .flatMap((value) => {
        if (Array.isArray(value)) {
          return value;
        } else {
          return [value];
        }
      })
      .filter((value) =>
        value.toLowerCase().includes(partialQuery.toLowerCase())
      );

    // Use a Set to make the values unique
    const uniqueMatchingValues = [...new Set(matchingValues)];

    res.status(200).json({
      status: "success",
      results: uniqueMatchingValues.length,
      data: uniqueMatchingValues,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      err: err.message,
    });
  }
};
