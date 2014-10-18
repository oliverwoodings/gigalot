var DataTypes = require("sequelize");
var sequelize = require("./sequelize");

var ScorePart = sequelize.define("ScorePart", {
  pdf: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = ScorePart;