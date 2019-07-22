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

  app.get("/api/employer/employerInfo"), function(req, res) {
    console.log(req);
    db.Employer.findOne({ where: {email: req.params.email} }).then(project => {
      console.log(JSON.stringify(project));
      res.json(project);
  });
}
  app.get("/api/user/userInfo"), function(req, res) {
    console.log(req);
    db.User.findOne({ where: {email: req.params.email} }).then(project => {
      console.log(JSON.stringify(project));
      res.json(project);
  });
}
  app.get("/api/user/locationSearch"), function(req, res) {
    console.log(req);
    db.User.findAll({ where: {location: req.params.location} }).then(project => {
      console.log(JSON.stringify(project));
      res.json(project);
  });
}
  app.get("/api/user/roleSearch"), function(req, res) {
    console.log(req);
    db.User.findAll({ where: {role: req.params.role} }).then(project => {
      console.log(JSON.stringify(project));
      res.json(project);
  });
}
  app.get("/api/user/userList"), function(req, res) {
    console.log(req);
    db.Example.findAll({}).then(function(project) {
      console.log(JSON.stringify(project));
      res.json(project);
  });
}

  app.get("/api/user/keywordSearch"), function(req, res) {
    console.log(req);
    var keyword = req.query;
    var resume = "";
    responseObject = [];
    db.Example.findAll({}).then(function(project, keyword) {
      console.log(JSON.stringify(project));
      for (i=0; i < project.length; i++) {
        var resume = project[i].resume;
        if (resume.search(keyword) > 0){
          responseObject += project[i];
        }
      };
      res.json(responseObject);
  });
}

  app.post('/api/admin/createEmployer', function (req, res) {
    db.Employer.create(req.body)
    .then(function(dbEmployer) {
      res.json(dbEmployer); 
    });
  });

  app.post('/api/admin/createEmployee', function (req, res) {
    db.User.create(req.body)
    .then(function(dbUser) {
      res.json(dbUser); 
    });
  });

  app.post('/jobseeker/profile',upload.none(), function (req, res, next) {

    console.log("posting to database");
    console.log(req.body);
    // console.log(req.file);
    
    // fb.put(files);
    db.User.create({
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


  app.post("/api/updateJob", function(req, res) {
    db.Job.create(req.body).then(function(dbJob) {
      res.json(dbJob);
    });
  });

  app.post("/api/post", function(req, res) {
    db.User.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Create a new example
  app.get("/user/read/:email", function(req, res) {
    // search for attributes
    // res.json(req.params.email)
    db.User.findOne({ where: {email: req.params.email} }).then(project => {
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
    db.User.update(req.body,
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


