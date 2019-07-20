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

  app.post('/jobseeker/profile',upload.none(), function (req, res, next) {

    console.log("posting to database");
    console.log(req.body);
    // console.log(req.file);
    
    // fb.put(files);
    db.user.create({
      name: req.body.name,
      email: req.body.email
      // name: DataTypes.STRING,
      // email: DataTypes.STRING,
      // photo: DataTypes.STRING,
      // resume: DataTypes.STRING,
      // description: DataTypes.TEXT
      
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
      name: req.body.name,
      email: req.body.email

      // companysize: req.body.companysize
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });
  })


  app.post("/api/post", function(req, res) {
    db.User.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Create a new example
  app.get("/user/read/:email", function(req, res) {
    // search for attributes
    // res.json(req.params.email)
    db.user.findOne({ where: {email: req.params.email} }).then(project => {
      console.log(project);
      if(project)
      {
        res.send(true);
      }
      else
      {
        res.send(false);
      }

  // project will be the first entry of the Projects table with the title 'aProject' || null
    })
  });
  app.put("/api/updateUser", function(req, res) {
    db.user.update(req.body,
      {
        where: {
          email: req.body.email
        }
      })
      .then(function(dbUser) {
        res.json(dbUser); 

      });
  });

  app.put("/api/updateEmployer", function(req, res) {
    db.Employer.update(req.body,
      {
        where: {
          email: req.body.email
        }
      })
      .then(function(dbUser) {
        res.json(dbUser); 

      });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

};


