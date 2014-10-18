var _ = require("lodash");
var express = require("express");
var bodyParser = require("body-parser");

var config = require("config");

var app = express();

app.use(bodyParser.json());
app.use(express.query());


app.listen(8000);