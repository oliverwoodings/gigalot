var DataTypes = require("sequelize");
var sequelize = require("./sequelize");

var Version = require("./version");

var Score = sequelize.define("Score", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  composer: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

Score.hasMany(Version, { as: "Version", constraints: false });
Version.hasOne(Score);

module.exports = Score;