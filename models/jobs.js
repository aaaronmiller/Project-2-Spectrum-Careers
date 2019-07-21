module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
     job: DataTypes.STRING
    });
    return Job;
  }
    