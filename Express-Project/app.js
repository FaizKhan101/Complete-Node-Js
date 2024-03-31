const express = require("express");
const bodyParser = require("body-parser");

const friendsRoutes = require("./routes/friends.routes");
const messagesRoutes = require("./routes/messages.routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
  console.log({req});
});

app.use("/friends", friendsRoutes);

app.use("/messages", messagesRoutes);

app.listen(3000, () => console.log("Server start at port 3000!"));
