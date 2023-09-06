const CategoryModel = require('../model/CategoryModel')

module.exports.AddCategory = async function(req,res) {

    let category = req.body.category

    let Category = new CategoryModel ({

        "category":category
    });

    await Category.save();

    res.json({ "msg": "category retrived", "data": Category, "rcode": 200 })
}
