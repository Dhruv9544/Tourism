const mongoose = require('mongoose');


// Define the MainCategory schema
const mainCategorySchema = new mongoose.Schema({
    image:String,
    name: String,
    subcategories: [String]
});

const MainCategory = mongoose.model('MainCategory', mainCategorySchema);

module.exports = { MainCategory };
