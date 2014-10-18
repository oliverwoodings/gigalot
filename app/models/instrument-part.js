var DataTypes = require("sequelize");
var sequelize = require("./sequelize");

var ScorePart = require("./score-part");

var InstrumentPart = sequelize.define("InstrumentPart", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

InstrumentPart.hasMany(ScorePart, { as: "ScoreParts", constraints: false });
ScorePart.hasOne(InstrumentPart);

module.exports = InstrumentPart;