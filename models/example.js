module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    pw: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.STRING,
    resume: DataTypes.STRING,
    testAnswers: DataTypes.TEXT,
    role: DataTypes.TEXT,
    temperment: DataTypes.TEXT,
  });
   var Employer = sequelize.define("Employer", {
    username: DataTypes.STRING,
    pw: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.STRING,
    bio: DataTypes.STRING,
  });
  return (User,Employer);
  
};
