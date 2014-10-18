var DataTypes = require("sequelize");
var sequelize = require("./sequelize");

var Contact     = require("./contact");
var Setlist     = require("./setlist");
var Participant = require("./participant");

var Gig = sequelize.define("Gig", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  postcode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM,
    values: ["possible", "confirmed", "cancelled"]
  }
});

Gig.hasMany(Contact, { as: "Contacts" });
Contact.hasMany(Gig, { as: "Gigs", constraints: false });

Gig.hasOne(Setlist);

Gig.hasMany(Participant, { as: "Participants", constraints: false });
Participant.hasOne(Gig);

module.exports = Gig;