const mongoose = require("mongoose");

const DurationVisitSchema = new mongoose.Schema({

    Duration:{
        type:[String], 
    }

})

module.exports = mongoose.model("DurationVisitData", DurationVisitSchema);