const Printer = require("@thiagoelg/node-printer");
var fs = require("fs");

// var myData = {
//   name: "test",
//   version: "1.0",
// };

// var outputFilename = "/tmp/my.json";

// fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("JSON saved to " + outputFilename);
//   }
// });
var info = fs.readFileSync("./sample2.json").toString();

function sendPrint() {
  Printer.printDirect({
    data: info,
    type: "RAW",
    success: function (jobID) {
      console.log("ID: " + jobID);
    },
    error: function (err) {
      console.log("printer module error: " + err);
      throw err;
    },
  });
}

sendPrint();
