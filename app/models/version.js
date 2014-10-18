var DataTypes = require("sequelize");
var sequelize = require("./sequelize");

var ScorePart = require("./score-part");

var Version = sequelize.define("Version", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  arranger: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

Version.hasMany(ScorePart, { as: "Parts", constraints: false });
ScorePart.hasOne(Version);

module.exports = Version;