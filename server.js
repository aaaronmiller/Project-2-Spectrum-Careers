require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var session = require('express-session');

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'spectrumuser',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}))

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// require("./rou tes/cookieController")(app);


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
