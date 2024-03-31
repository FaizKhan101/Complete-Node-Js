const express = require("express");
const bodyParser = require("body-parser");

const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.get("/friends", friendsController.getFriends);

app.get("/friends/:friendId", friendsController.getFriend);

app.post("/friends", friendsController.postFriend);

app.get("/messages", messagesController.getMessages);

app.post("/messages", messagesController.postMessage);

app.listen(3000, () => console.log("Server start at port 3000!"));
