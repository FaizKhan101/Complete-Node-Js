const express = require("express")

const app = express()

app.get("/", (req, res, next) => {
    res.send("<h1>Helloooo</h1>")
})

app.get("/messages", (req, res, next) => {
    res.send("<ul><li>Hello Faiz Khan</li></ul>")
})

app.post("/messages", (req, res, next) => {
    res.send("Updating...")
})

app.listen(3000, () => console.log("Server start at port 3000!"))