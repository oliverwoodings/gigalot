var DataTypes = require("sequelize");
var sequelize = require("./sequelize");

var User = require("./user");
var InstrumentPart = require("./instrument-part");

var Member = sequelize.define("Member", {
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

Member.hasOne(User);
User.hasMany(Member, { as: "Memberships", constraints: false });

Member.hasMany(InstrumentPart, { as: "InstrumentParts", constraints: false });
InstrumentPart.hasMany(Member, { as: "Players", constraints: false });

module.exports = Member;