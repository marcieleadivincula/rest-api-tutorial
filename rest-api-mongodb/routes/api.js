const express = require("express");
const router = express.Router();
const User = require("../models/user");

//get a list of users from the db
router.get("/users", (req, res) => {
  res.send({ type: "GET" });
});

//add a new user to the db
router.post("/users", (req, res) => {
  // let user = new User(req.body);
  // user.save();
  User.create(req.body).then((user) => {
    res.send(user);
  });
});

//update a user in the db
router.put("/users/:id", (req, res) => {
  res.send({ type: "PUT" });
});

//delete a user from the db
router.delete("/users/:id", (req, res) => {
  res.send({ type: "DELETE" });
});

module.exports = router;
