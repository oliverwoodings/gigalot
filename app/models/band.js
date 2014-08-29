var restful = require("node-restful");
var mongoose = restful.mongoose;
var SchemaTypes = mongoose.SchemaTypes;

var Band = restful.model("Band", new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  members: [{
    admin: Boolean,
    instruments: [{ type: SchemaTypes.ObjectId, ref: "Instrument" }],
    member: { type: SchemaTypes.ObjectId, ref: "Member" }
  }],
  scores: [{ type: SchemaTypes.ObjectId, ref: "Score" }],
  contacts: [{ type: SchemaTypes.ObjectId, ref: "Contact" }],
  instruments: [{ type: SchemaTypes.ObjectId, ref: "Instrument" }],
  gigs: [{ type: SchemaTypes.ObjectId, ref: "Gig" }]
}));

Band.methods(["get", "post", "put"]);

module.exports = Band;