var restful = require("node-restful");
var mongoose = restful.mongoose;
var SchemaTypes = mongoose.SchemaTypes;

var Member = restful.model("Member", new mongoose.Schema({
  name: {
    first: { type: String, required: true },
    last: { type: String, require: true },
  },
  email: { type: string, required: true, unique: true },
  password: { type: string, required: true }
}));

Member.methods(["get", "post", "put"]);

module.exports = Member;