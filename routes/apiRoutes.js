var db = require("../models");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) { 
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.post('/user/profile',upload.single('file1'), function (req, res, next) {

    console.log("posting to database");
    console.log(req.body);
    console.log(req.file);
    
    // fb.put(files);
    db.user.create({
      username: req.body.firstname,
      description: req.body.bio,
      
      // resume: req.file
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  })


  app.post('/employer/profile',upload.none(), function (req, res, next) {

    console.log("posting to database");
    console.log(req.body);

    // console.log(req.file);

    db.Employer.create({
      name: req.body.jobtitle,
      bio: req.body.bio,

      // companysize: req.body.companysize
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });
  })


  // Create a new example
  app.get("/user/read/:email", function(req, res) {
    // search for attributes
    // res.json(req.params.email)
    db.user.findOne({ where: {email: req.params.email} }).then(project => {
      console.log(project);
      res.send(project|| 'not logged in');
  // project will be the first entry of the Projects table with the title 'aProject' || null
    })
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};


// fb.ref().then(function(downloadURL) {
//   console.log('File available at', downloadURL)
// });