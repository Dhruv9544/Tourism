const TourDataModel = require('../model/FormDataModel')

module.exports.TourData = async function(req,res){

    let TourData = new TourDataModel({
        DestinationName:req.body.DestinationName,
        AboutPlace:req.body.AboutPlace,
        DurationOfVisit:req.body.DurationOfVisit,
        Rating:req.body.Rating,

        District:req.body.District,
        Season:req.body.Season,
        Category:req.body.Category,

        Location:req.body.Location,
        OfficialWebsiteLink:req.body.OfficialWebsiteLink,
        Visualcontent:req.body.Visualcontent,
        Holiday:req.body.Holiday,

        Opentime:req.body.Opentime,
        closetime:req.body.closetime,

        Thumbnail:req.body.Thumbnail,
        RelatedPhotos:req.body.RelatedPhotos,

        getThereBybus:req.body.getThereBybus,
        getThereByTrain:req.body.getThereByTrain,
        getThereByPlain:req.body.getThereByPlain,

        MainAttractions:req.body.MainAttractions,
        BriefHistory:req.body.BriefHistory,
    
     })

     console.log(req.body)
     console.log(req.file);
     let data =  await TourData.save()

     console.log(data);

     res.json({ data: data, msg: 'Data Enterd sucessfully!!', rcode: 200 });
}