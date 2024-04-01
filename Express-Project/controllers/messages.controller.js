const path = require("path")

exports.getMessages = (req, res, next) => {
  res.sendFile(path.join(__dirname,"..", "public", "image.jpg"))
  // res.send("<ul><li>Hello Faiz Khan</li></ul>");
};

exports.postMessage = (req, res, next) => {
  res.send("Updating...");
};
