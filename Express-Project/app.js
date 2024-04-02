const path = require("path")

const express = require("express");
const bodyParser = require("body-parser");

const friendsRoutes = require("./routes/friends.routes");
const messagesRoutes = require("./routes/messages.routes");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use("/friends", friendsRoutes);

app.use("/messages", messagesRoutes);

app.use("/", (req, res, next) => {
  res.render("index", {
    title: "My Friend is very clever",
    caption: "It's time to learn Node.Js"
  })
})

app.listen(3000, () => console.log("Server start at port 3000!"));
