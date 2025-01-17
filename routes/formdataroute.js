const express = require("express");
const TourDataModel = require("./../model/FormDataModel");

const router = express.Router();
const IMAGE_UPLOAD_DIR = "./public/Thumbnail/";
const IMAGE_BASE_URL = "http://localhost:9999/Thumbnail/";
const multiparty = require("multiparty");
const fs = require("fs");
var FORM_OPTIONS = {
  uploadDir: IMAGE_UPLOAD_DIR,
};

router.route("/").post(function async(req, res, next) {
  var form = new multiparty.Form(FORM_OPTIONS);

  form.parse(req, function async(err, fields, files) {
    if (err) {
      return next(new Error(LARGE));
    }

    for (var field in fields) fields[field] = fields[field].pop();

    req.body = fields;
    //thumbnail

    const thumbnailpath = files.Thumbnail[0].path;

    const thumbnailFileName = thumbnailpath.slice(
      thumbnailpath.lastIndexOf("\\") + 1
    );

    const thumbnailimageformat = thumbnailFileName.slice(
      thumbnailFileName.lastIndexOf(".")
    );

    //thumbnail rename
    renameFile(
      IMAGE_UPLOAD_DIR,
      thumbnailFileName,
      fields.DestinationName.replaceAll(" ", "_"),
      thumbnailimageformat
    );

    const thumbnailURL =
      IMAGE_BASE_URL +
      fields.DestinationName.replaceAll(" ", "_") +
      thumbnailimageformat;

    //relatedcontent

    let relatedphotopaths = [];
    let i = 1;
    files.RelatedPhotos.map((data) =>
      renameFile(
        IMAGE_UPLOAD_DIR,
        data.path.slice(data.path.lastIndexOf("\\") + 1),
        fields.DestinationName.replaceAll(" ", "_") + "_" + i++,
        data.path
          .slice(data.path.lastIndexOf("\\") + 1)
          .slice(
            data.path.slice(data.path.lastIndexOf("\\") + 1).lastIndexOf(".")
          )
      )
    );
    let j = 1;
    files.RelatedPhotos.map((data) =>
      relatedphotopaths.push(
        IMAGE_BASE_URL +
          fields.DestinationName.replaceAll(" ", "_") +
          "_" +
          j++ +
          data.path
            .slice(data.path.lastIndexOf("\\") + 1)
            .slice(
              data.path.slice(data.path.lastIndexOf("\\") + 1).lastIndexOf(".")
            )
      )
    );

    let TourData = new TourDataModel({
      DestinationName: req.body.DestinationName,
      AboutPlace: req.body.AboutPlace,
      DurationOfVisit: req.body.DurationOfVisit,
      Rating: req.body.Rating,

      District: req.body.District,
      Season: req.body.Season.split(","),
      Category: req.body.Category.split(","),

      Location: req.body.Location,
      OfficialWebsiteLink: req.body.OfficialWebsiteLink,
      VisualContent: req.body.VisualContent,
      Holiday: req.body.Holiday,

      OpenTime: req.body.OpenTime,
      CloseTime: req.body.CloseTime,

      Thumbnail: thumbnailURL,
      RelatedPhotos: relatedphotopaths,

      GetThereByBus: req.body.GetThereByBus,
      GetThereByTrain: req.body.GetThereByTrain,
      GetThereByPlane: req.body.GetThereByPlane,

      MainAttractions: req.body.MainAttractions,
      BriefHistory: req.body.BriefHistory,
    });
    try {
      TourData.save().then((data) => {
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
