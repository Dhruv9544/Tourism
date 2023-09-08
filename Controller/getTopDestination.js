const FormdataModel = require("../model/FormDataModel");

module.exports.getTopDestination = function (req, res) {
  FormdataModel.find({ Rating: 5 })
    .then((data) => {
      res.json({ data: data, msg: "data retrived", rcode: 200 });
    })
    .catch((err) => {
      res.json({ data: err, msg: "smw", rcode: -9 });
    });
};
