var mysql = require("mysql");

// beginning of sequelize work commented out because it did not work
// var Sequelize = require('sequelize');
// var connection = new Sequelize('myburgers_db', 'root', '');
//
// var Burger = connection.define(
//     'burger', {
//       id: {
//         type: Sequelize.INTEGER,
//         unique: true,
//         allowNull: false,
//         primaryKey: true
//       },
//       burger_name: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       devoured: {
//         type: Sequelize.BOOLEAN,
//         defaultValue: 'FALSE'
//       },
//       calories: {
//         type: Sequelize.INTEGER,
//         defaultValue: 500
//       }
//     }
// );
//
// connection.sync().then (function() {
//     Burger.findAll().then (function (burger) {
//         console.log(burger.dataValues);
//     });
// });

cearlier direct mysql work... still works
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "myburgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
