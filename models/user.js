module.exports = function userdata(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    username: DataTypes.STRING,
    pw: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.STRING,
    resume: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return User;

};

