const tourDataModel = require("../model/FormDataModel");

// module.exports.gettours = async (req, res) => {
//   const query = { ...req.query };
//   console.log(query);
// //   querys = req
//   const tours = await tourDataModel.find(query);

//   res.status(200).json({
//     status: "success",
//     reqestedAt: req.requestTime,
//     results: tours.length,
//     data: {
//       tours,
//     },
//   });
// };
module.exports.gettours= function(req,res){

    console.log(req.query);
    tourDataModel.find(req.query).then((data)=>{

        if(data.length === 0 )
        {
          res.json({ "msg": "No data found", "data": data, "rcode": 200 })
        }
        else
        {   
          res.json({ "msg": "Data retrived", "data": data, "rcode": 200 })
        }
      
    }).catch((err)=>{
      res.json({ "msg": "Error in fetching data", "data": data, "rcode": 9 })
    })
}