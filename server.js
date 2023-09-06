const express = require("express");
const bodyparser = require("body-parser");
const getAllDistrict = require("./Controller/getAllDistrict")

const formdataroute = require("./routes/formdataroute");

require("./config/dbconfig").getDbConnection();

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.json());

app.use("/formdata", formdataroute);
app.get("/getalldistrict",getAllDistrict.getAllDistricts)

// app.post("/formdata", );

app.listen(9999);
console.log("server started at 9999");
