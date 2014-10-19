var router = require("./router");

var User = require("../models/user");

router.route("/user")
  //Create user
  .post(function (req, res, next) {
    User.create(req.body)
      .then(res.json)
      .catch(next);
  });