const basededatos = require("../index");

const encontrarPorUsuario = async (body) => {
    return await basededatos.sequelize.query(
        `SELECT * FROM USUARIOS WHERE USUARIO = "${body.usuario}";`,
        { type: basededatos.sequelize.QueryTypes.SELECT });
};

const crear = async (body) => {
  return await basededatos.sequelize.query(
    `INSERT INTO USUARIOS (usuario, nombre_apellido, email, telefono, direccion, password, roleId) 
     VALUES ("${body.usuario}","${body.nombre_apellido}","${body.email}","${body.telefono}", "${body.direccion}", "${body.password}", ${body.roleId});`,
    { type: basededatos.sequelize.QueryTypes.INSERT }
  );
};

module.exports = {
  encontrarPorUsuario,
  crear
};