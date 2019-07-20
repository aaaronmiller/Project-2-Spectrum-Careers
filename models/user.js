module.exports = function userdata(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    // username: DataTypes.STRING,
    // pw: DataTypes.STRING,

    //defined by google
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.STRING,
    //defined by profile page
    phone: DataTypes.STRING,
    resume: DataTypes.STRING,
    location: DataTypes.STRING,
    //defined by survey page
    testAnswers: DataTypes.TEXT,
    role: DataTypes.TEXT,
    temperment: DataTypes.TEXT
  });
  return User;

};

