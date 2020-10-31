const Sequelize = require("sequelize");
const basededatos = {};

const sequelize = new Sequelize("delilahresto", "root", "Ingagr18", {
  dialect: "mysql",
  host: "localhost"
});

sequelize.authenticate().then(() => {
  console.log('Conexión Establecida');
}).catch(error => {
  console.log(error);
});

basededatos.sequelize = sequelize;
//database.Sequelize = Sequelize;

module.exports = basededatos;