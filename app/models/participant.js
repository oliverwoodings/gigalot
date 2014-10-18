var DataTypes = require("sequelize");
var sequelize = require("./sequelize");

var Member         = require("./member");
var InstrumentPart = require("./instrument-part");

var Participant = sequelize.define("Participant", {
  available: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: null
  },
  status: {
    type: DataTypes.ENUM,
    allowNull: false,
    defaultValue: "unconfirmed",
    values: ["confirmed", "unconfirmed", "unrequired"]
  }
});

Participant.hasOne(Member);
Member.hasMany(Participant, { as: "Gigs", constraints: false });

Participant.hasOne(InstrumentPart);

module.exports = Participant;