const mongoose = require("mongoose");

const TourDataSchema = new mongoose.Schema({
  DestinationName: {
    type: String,
    required: [true, "Please Enter Destination name"],
    trim: true,
  },

  AboutPlace: {
    type: String,
    required: [true, "Please Enter information about place"],
    trim: true,
  },
  BriefHistory: {
    type: String,
    // required: [true, "Please enter  history of that place"],
    trim: true,
  },
  MainAttractions: {
    type: String,
    // required: [true, "provide some attraction points of the place"],
  },
  GetThereByBus: {
    type: String,
  },
  GetThereByTrain: {
    type: String,
  },
  GetThereByPlane: {
    type: String,
  },
  Thumbnail: {
    type: String,
    // required: [true, "please upload thumbnail"],
  },
  RelatedPhotos: {
    type: [String],
    // required: [true, "please upload relatedphotos"],
  },
  OpenTime: {
    type: String,
    // required: true,
  },
  CloseTime: {
    type: String,
    // required: true,
  },
  Holiday: {
    type: String,
    // required: true,
  },

  VisualContent: {
    type: String,
    // required: true,
  },
  OfficialWebsiteLink: {
    type: String,
    // required: true,
  },
  Location: {
    type: String,
    // required: true,
  },
  Category: {
    type: [String],
    // required: true,
  },
  Season: {
    type: String,
    // required: true,
  },
  District: {
    type: String,
    // required: true,
  },
  DurationOfVisit: {
    type: String,
    // required: true,
  },
  Rating: {
    type: String,
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("TourData", TourDataSchema);
