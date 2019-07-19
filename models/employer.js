
module.exports = function(sequelize, DataTypes) {
  var Employer = sequelize.define("Employer", {
    username: DataTypes.STRING,
    pw: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.STRING,
    bio: DataTypes.STRING,
  });
  return Employer;
}
  