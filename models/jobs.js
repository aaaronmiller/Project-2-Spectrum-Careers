module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
      location: DataTypes.STRING
    });
    return Job;
  }
    