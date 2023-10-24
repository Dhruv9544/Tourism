const mongoose = require("mongoose");

const BlogDataSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: [true, "Please Enter Destination name"],
    trim: true,
  },
  Author_Name: {
    type: String,
    trim: true,
  },
  About: {
    type: String,
    required: [true, "Please Enter information about place"],
    trim: true,
  },
  Category: {
    type: String,
  },
  Thumbnail: {  
    type: String,
  },
  CreatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('BlogData',BlogDataSchema)
// const BlogData = mongoose.model("BlogData", BlogDataSchema);

// module.exports = { BlogData };
