/**
* Band.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    name: {
      type: "string",
      unique: true
    },
    members: {
      collection: "User",
      via: "bands"
    },
    scores: {
      collection: "Score",
      via: "band"
    },
    contacts: {
      collection: "Contact",
      via: "band"
    },
    instruments: {
      collection: "Instrument",
      via: "band"
    },
    gigs: {
      collection: "Gig",
      via: "band"
    }
  }
};

