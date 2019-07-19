module.exports = function userdata(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    username: DataTypes.STRING,
    pw: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.STRING,
    resume: DataTypes.STRING,
    testAnswers: DataTypes.TEXT,
    role: DataTypes.TEXT,
    temperment: DataTypes.TEXT
    // description: DataTypes.TEXT
  });
  return User;

};

