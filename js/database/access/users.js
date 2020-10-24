const database = require("../index");

const findByUsername = async (body) => {
    console.log('Entró2');
    return await database.sequelize.query(
        `SELECT * FROM USERS WHERE USERNAME = "${body.username}";`,
        { type: database.sequelize.QueryTypes.SELECT });
};

const createUser = async (body) => {
  return await database.sequelize.query(
    `INSERT INTO USERS (email, password, username, fullname, cellphone, shippingAddress, roleId) 
     VALUES ("${body.email}","${body.password}","${body.username}","${body.fullname}", "${body.cellphone}", "${body.shippingAddress}", ${body.roleId});`,
    { type: database.sequelize.QueryTypes.INSERT }
  );
};

module.exports = {
  findByUsername,
  createUser,
};