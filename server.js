const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const addDistricts = require("./Controller/addDistricts");
const getDistricts = require("./Controller/getDistricts");
const addcategory = require("./Controller/addCategory");
const getcategory = require("./Controller/getCategory");
const addseasons = require("./Controller/addSeasons");
const getseasons = require("./Controller/getSeasons");
const getduration = require("./Controller/getDuration");
const adduration = require("./Controller/addDuration");
const getTopDestination = require("./Controller/getTopDestination");
const getMainCategory = require("./Controller/getMainCategory");
const getReqCategory = require("./Controller/getReqCategory");
const formdataroute = require("./routes/formdataroute");
const categoryroute = require("./routes/categoryroute");
const getAllPlaces = require("./Controller/GetAllPlaces");
const CustomeSearch = require("./Controller/customeSearch");
const BlogDataroute = require("./routes/blogroute");
const getGeoData = require("./Controller/getGeoData");
const blogController = require("./Controller/blogController")

require("./config/dbconfig").getDbConnection();

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

app.use("/formdata", formdataroute);
app.use("/category", categoryroute);
app.use("/blog", BlogDataroute);

app.post("/adddistricts", addDistricts.AddDistrict);
app.get("/getdistricts", getDistricts.getAllDistricts);

app.post("/addcategory", addcategory.AddCategory);
app.get("/getcategory", getcategory.getAllCategory);

app.post("/addseasons", addseasons.AddSeason);
app.get("/getseasons", getseasons.getAllSeasons);

app.post("/addduration", adduration.AddDuration);
app.get("/getduration", getduration.getAllDuration);
// app.post("/formdata", );

app.get("/gettopdestination", getTopDestination.getTopDestination);

// app.post("/addMainCategory", addMainCategory.addData);
app.get("/getMainCategory", getMainCategory.getCategory);

app.get("/getReqCategory", getReqCategory.gettours);
app.get("/getAllPlacesbySeasons", getAllPlaces.GetAllPlacesbySeason);
app.get("/getAllPlaces", getAllPlaces.GetAllPlaces);

app.get("/search", CustomeSearch.CustomeSearch);
app.get("/Filter", getAllPlaces.FilterPlaces);
// app.get("/Suggesion", CustomeSearch.Suggesions);
app.get("/Geodata", getGeoData.getGeoData);

//blog routes

// app.post('/addblog',blogController.addBlog)
app.get('/getallblog',blogController.getAllBlogs)
app.delete('/deleteblog/:BlogId',blogController.deleteBlogs)
app.patch('/updateblog/:BlogId',blogController.updateBlogs)

app.listen(9999);
console.log("server started at 9999");
