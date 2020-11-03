const Sequelize = require("sequelize");
const basededatos = {};

const sequelize = new Sequelize("delilahresto", "root", "CONFIG_PASSWORD", {
  dialect: "mysql",
  host: "localhost"
});

sequelize.authenticate().then(() => {
  console.log('Conexión Establecida');
}).catch(error => {
  console.log(error);
});

basededatos.sequelize = sequelize;

module.exports = basededatos;