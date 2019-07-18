module.exports = function(sequelize, DataTypes) {
  var Data = sequelize.define("Data", {
    firstname: DataTypes.STRING,
    summary: DataTypes.STRING,
    // resume:

  });
  return Data
};
