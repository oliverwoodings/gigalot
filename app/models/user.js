var DataTypes = require("sequelize");
var sequelize = require("./sequelize");

var User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    set: function (value) {
      this.setDataValue("email", value.toLowerCase());
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

User.sync({ force: true });

module.exports = User;