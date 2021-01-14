const express = require("express");
//const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//set up express app
const app = express();

//connect to mongoDB
mongoose.connect("mongodb://localhost/odontotech");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//initialize routes
//app.use("/api", routes);
app.use("/api", require("./routes/api"));

//listen for requests
app.listen(process.env.port || 4000, () => {
  console.log("Now listening for requests");
});

