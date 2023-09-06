const mongoose = require("mongoose");

const SeasonDataSchema = new mongoose.Schema({

    Season:{
        type:[String], 
    }

})

module.exports = mongoose.model("SeasonData", SeasonDataSchema);