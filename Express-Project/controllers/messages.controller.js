const path = require("path")

exports.getMessages = (req, res, next) => {
  res.render("messages", {
    friend: "Elon Musk"
  })
};

exports.postMessage = (req, res, next) => {
  res.send("Updating...");
};
