
const express = require("express")
const app = express()

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://elkourafouad:stDAIWKBosdtdJSV@cluster0.xlahxww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then( (res)  => {
  console.log("connected to mongoDB")

  app.listen(3000, () => {
    console.log("App running on port 3000")
  })

}).catch( (err) => {
  console.log("Not connected")
})
