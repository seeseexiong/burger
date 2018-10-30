// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(bb) {
    orm.all("burgers", function(res) {
      bb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, bb) {
    orm.create("burgers", cols, vals, function(res) {
      bb(res);
    });
  },
  update: function(objColVals, condition, bb) {
    orm.update("burgers", objColVals, condition, function(res) {
      bb(res);
    });
  }
};

// Export the database functions for the controller (controller.js).
module.exports = burger;
