var db = require("../models/index");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) { 
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.post('/user/profile', upload.single('file1'), function (req, res, next) {

    console.log("posting to database");
    console.log(req.body);
    console.log(req.file);
    

    db.Data.create({
      firstname: req.body.firstname,
      summary: req.body.bio,
      resume: req.file
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })


  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
