const { MainCategory } = require('../model/MainCategoryModel');

// Controller to fetch values
module.exports.getCategory = async (req, res) => {

    MainCategory.find().then((data) => {
        res.json({ "msg": "retrived", "data": data, "rcode": 200 })
    }).catch((err) => {
        console.log(err);
        res.json({ "msg": "SMW", "rcode": -9, "data": err })
    })

};


