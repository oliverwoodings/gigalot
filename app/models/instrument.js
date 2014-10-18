var DataTypes = require("sequelize");
var sequelize = require("./sequelize");

var InstrumentPart = require("./instrument-part");

var Instrument = sequelize.define("Instrument", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

Instrument.hasMany(InstrumentPart, { as: "InstrumentParts", constraints: false });
InstrumentPart.hasOne(Instrument);

module.exports = Instrument;