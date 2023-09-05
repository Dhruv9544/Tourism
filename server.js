const express = require("express");
const file = require("./Middleware/upload");
const bodyparser = require("body-parser");
const FormDataController = require("./Controller/FormDataController");
// const multer = require("multer");

const formdataroute = require("./routes/formdataroute");
// const upload = multer({ dest: '/images/Thumbnail' })

require("./config/dbconfig").getDbConnection();

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.json());

app.use("/formdata", formdataroute);

// app.post("/formdata", );

app.listen(9999);
console.log("server started at 9999");
