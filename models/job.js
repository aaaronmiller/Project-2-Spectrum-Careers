module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
     job: DataTypes.STRING
    });

  
    Job.associate = function(models) {
      // We're saying that a job should belong to an Author
      // A job can't be created without an Author due to the foreign key constraint
      models.Job.belongsTo(models.Employer, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Job;
};