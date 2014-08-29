var _ = require("lodash");
var express = require("express");
var bodyParser = require("body-parser");
var restful = require("node-restful");
var mongoose = restful.mongoose;

var config = require("config");
var models = require("./app/models");

var app = express();

app.use(bodyParser.json());
app.use(express.query());

mongoose.connect(config.mongodb.connString);

//Register the models
_.each(models, function (model, name) {
  //Convert model name to url-friendly structure
  var urlName = name.replace(/(.)?([A-Z])/g, function (full, pre, char) {
    return (pre ? pre + "-" : "") + char.toLowerCase();
  });
  model.register(app, "/api/" + urlName + "s");
});

app.listen(8000);