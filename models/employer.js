
module.exports = function(sequelize, DataTypes) {
    var Employer = sequelize.define("Employer", {
      jobtitle: DataTypes.STRING,//jobtitle
      bio: DataTypes.STRING,//jobdescription
      companysize: DataTypes.STRING
  
    });
    return Employer
  };
  