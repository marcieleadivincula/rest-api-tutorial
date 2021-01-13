const express = require("express");
//const routes = require("./routes/api");

//set up express app
const app = express();

//initialize routes
//app.use("/api", routes);
app.use("/api", require("./routes/api"));

//listen for requests
app.listen(process.env.port || 4000, () => {
  console.log("Now listening for requests");
});
