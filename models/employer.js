
module.exports = function(sequelize, DataTypes) {
  var Employer = sequelize.define("Employer", {
    // username: DataTypes.STRING,
    // pw: DataTypes.STRING,
    //defined by google
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.STRING,
    //defined by profile page
    phone: DataTypes.STRING,
    bio: DataTypes.STRING,
    location: DataTypes.STRING
  });
  return Employer;
}
  