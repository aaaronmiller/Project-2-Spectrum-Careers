
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
    bio: DataTypes.TEXT,
    location: DataTypes.STRING
  });

  Employer.associate = function(models) {
    // AssociatingEmployer with Posts
    // When anEmployer is deleted, also delete any associated Posts
     models.Employer.hasMany(models.Job, {
        onDelete: "cascade"
    });
  };
  return Employer;
};
  