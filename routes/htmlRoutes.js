var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });
  app.get("/myaccount", function (req, res) {
    res.render("myaccount", {
    });
  });
  app.get("/question", function (req, res) {
    res.render("question");
  });

  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/profile", function (req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    res.render("profile");
  });
  app.get("/employer", function (req, res) {
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    res.render("employer");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
