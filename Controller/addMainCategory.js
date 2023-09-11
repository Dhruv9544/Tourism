
const { MainCategory } = require("../model/MainCategoryModel");

const addData = async (req, res) => {
  try {
   
   
    const newMaincategory = new MainCategory({
      image: req.body.img,
      name: req.body.name,
      subcategories: req.body.Subcategory,
    });

    await newMaincategory.save();

    res.json({ success: true, message: "Data added successfully" , rcode:200});
  } catch (error) {
    console.error(error);
    res.json({ success:false , message: "something went wrong" , rcode:-9});
  }
};

module.exports = { addData };
