exports.getMessages = (req, res, next) => {
  res.send("<ul><li>Hello Faiz Khan</li></ul>");
};

exports.postMessage = (req, res, next) => {
  res.send("Updating...");
};
