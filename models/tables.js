
module.exports = function userdata(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    firstname: DataTypes.STRING,
    summary: DataTypes.STRING,
    // resume:

  });
  return user
};

