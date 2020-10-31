const basededatos = require("../index");

const encontrarPorUsuario = async (body) => {
    console.log('Entró2');
    return await basededatos.sequelize.query(
        `SELECT * FROM USUARIOS WHERE USUARIO = "${body.usuario}";`,
        { type: basededatos.sequelize.QueryTypes.SELECT });
};

/* const createUser = async (body) => {
  return await basededatos.sequelize.query(
    `INSERT INTO USERS (email, password, username, fullname, cellphone, shippingAddress, roleId) 
     VALUES ("${body.email}","${body.password}","${body.username}","${body.fullname}", "${body.cellphone}", "${body.shippingAddress}", ${body.roleId});`,
    { type: basededatos.sequelize.QueryTypes.INSERT }
  );
}; */

module.exports = {
  encontrarPorUsuario
};