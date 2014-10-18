var DataTypes = require("sequelize");
var sequelize = require("./sequelize");

var Version = require("./version");

var Setlist = sequelize.define("Setlist", {
  name: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

Setlist.hasMany(Version, { as: "ScoreVersions" });

module.exports = Setlist;