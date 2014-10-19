var _ = require("lodash");
var express = require("express");
var bodyParser = require("body-parser");

var config = require("config");
var router = require("./app/routes/router");

var app = express();

app.use(bodyParser.json());
app.use(express.query());

var routes = ["user"];
_.each(routes, function (route) {
  require("./app/routes/" + route);
});

//JSON wrapping
app.use("/api", function (req, res, next) {
  res._json = res.json.bind(res);
  res.json = function (data) {
    res._json({
      status: "success",
      code: res.statusCode || 200,
      data: data || {}
    });
  };
  next();
});

app.use("/api", router);

//Error handling
app.use(function (err, req, res, next) {
  if (!err.status) {
    err.status = 500;
  }
  var msg
  if (err.status >= 500) {
    msg = {
      status: "fail",
      code: err.status,
      message: err.message || err.name || "Internal Server Error"
    };
    console.log(err.message || err.name);
    console.log(err.stack);
  } else if (err.status >= 400) {
    msg = {
      status: "error",
      code: err.status,
      message: err.message || err.name || "Unknown Request Error",
      data: err.data || ""
    };
  }
  res.status(err.status);
  res._json(msg);
});

app.listen(8000);