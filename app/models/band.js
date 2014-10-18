var DataTypes = require("sequelize");
var sequelize = require("./sequelize");

var Member     = require("./member");
var Instrument = require("./instrument");
var Score      = require("./score");
var Setlist    = require("./setlist");
var Contact    = require("./contact");
var Gig        = require("./gig");

var Band = sequelize.define("Band", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Band.hasMany(Instrument, { as: "Instruments" });

Band.hasMany(Member, { as: "Member", constraints: false });
Member.hasOne(Band);

Band.hasMany(Score, { as: "Scores" });

Band.hasMany(Setlist, { as: "SetlistTemplates" });

Band.hasMany(Gig, { as: "Gigs", constraints: false });
Gig.hasOne(Band);

Band.hasMany(Contact, { as: "Contacts" });

module.exports = Band;