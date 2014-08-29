var restful = require("node-restful");
var mongoose = restful.mongoose;
var SchemaTypes = mongoose.SchemaTypes;

var Instrument = restful.model("Instrument", new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  instrumentParts: [{ type: SchemaTypes.ObjectId, ref: "InstrumentPart" }]
}));

Instrument.methods(["get", "post", "put"]);

module.exports = Instrument;