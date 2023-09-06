const mongoose = require("mongoose");

const DistrictDataSchema = new mongoose.Schema({

    district:{
        type:[String], 
    }

})

module.exports = mongoose.model("DistrictData", DistrictDataSchema);