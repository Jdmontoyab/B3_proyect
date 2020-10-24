const Sequelize = require("sequelize");
const database = {};

//const database = new Sequelize("mysql://root:@localhost:3307/delilahresto");

const sequelize = new Sequelize("delilahresto", "root", "Ingagr18", {
  dialect: "mysql",
  host: "localhost",
});

database.sequelize = sequelize;
//database.Sequelize = Sequelize;

module.exports = database;