const mongoose = require("mongoose");

const CategoryDataSchema = new mongoose.Schema({

    category:{
        type:[String], 
    }

})

module.exports = mongoose.model("CategoryData",CategoryDataSchema);