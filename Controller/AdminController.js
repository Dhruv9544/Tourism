const AdminModel = require("../model/AdminModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { ACCESS_TOKEN_SECRET } = process.env;

module.exports.signup = async function (req, res) {
  let admin = new AdminModel(req.body);
  console.log(admin);

  let data = await admin.save();

  res.json({ data: data, msg: "signup done", rcode: 200 });
};

module.exports.login = async function (req, res) {
  const { email, password } = req.body;

  let admin = await AdminModel.findOne({ email: email });
//   console.log(admin);

  if (admin && admin.password == password) {
    const accesstoken = jwt.sign(
      { email: admin.email, AdminId: admin._id },
      ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    console.log("accesstoken=>" + accesstoken);

    // const refreshtoken = jwt.sign(
    //     { email: admin.email, AdminId: admin._id },
    //     ACCESS_TOKEN_SECRET,
    //     { expiresIn: "1d" })

    res.json({
      data: admin,
      token: accesstoken,
      msg: "login done",
      rcode: 200,
    });
  } else {
    res.json({ data: req.body, msg: "Invalid credential", rcode: -9 });
  }
};
