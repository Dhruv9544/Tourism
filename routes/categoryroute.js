const express = require("express");
const { MainCategory } = require("./../model/MainCategoryModel");

const router = express.Router();
const IMAGE_UPLOAD_DIR = "./public/Category/";
const IMAGE_BASE_URL = "http://localhost:9999/Category/";
const multiparty = require("multiparty");
const fs = require("fs");
var FORM_OPTIONS = {
  uploadDir: IMAGE_UPLOAD_DIR,
};

router.route("/").post(function async(req, res, next) {
  var form = new multiparty.Form(FORM_OPTIONS);

  form.parse(req, function async(err, fields, files) {
    if (err) {
      return next(console.log(err));
    }

    for (var field in fields) fields[field] = fields[field].pop();

    req.body = fields;
    //thumbnail

    const categorypath = files.image[0].path;

    const categoryFileName = categorypath.slice(
      categorypath.lastIndexOf("\\") + 1
    );

    const categoryimageformat = categoryFileName.slice(
      categoryFileName.lastIndexOf(".")
    );

    //thumbnail rename
    renameFile(
      IMAGE_UPLOAD_DIR,
      categoryFileName,
      fields.name.replaceAll(" ", "_"),
      categoryimageformat
    );

    const categoryURL =
      IMAGE_BASE_URL + fields.name.replaceAll(" ", "_") + categoryimageformat;

    //relatedcontent

    // let MainCategory = new MainCategoryModel({
    //   image: categoryURL,
    //   name: req.body.name,
    //   subcategories: req.body.subcategories,
    // });
    let MainCategoryData = new MainCategory({
      image: categoryURL,
      name: req.body.name,
      subcategories: req.body.subcategories,
    });
    try {
      MainCategoryData.save().then((data) => {
        res.json({ data: data, msg: "Data Enterd sucessfully!!", rcode: 200 });
        console.log(data);
      });
    } catch (err) {
      res.json({ error: err });
    }
  });
});

function renameFile(filePath, existingName, newName, format) {
  if (fs.existsSync(filePath + existingName)) {
    fs.rename(
      filePath + existingName,
      filePath + newName + format,
      function (err) {
        if (err) console.log(err);
      }
    );
  }
}

module.exports = router;
