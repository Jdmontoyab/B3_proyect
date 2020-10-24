const database = require("../index");

const createProduct = async (body) => {
  return await database.sequelize.query(
    `INSERT INTO PRODUCTS (description, price) VALUES ("${body.description}", ${body.price});`,
    { type: database.sequelize.QueryTypes.INSERT }
  );
};

module.exports = {
    createProduct
    /* findAll,
    findAllByIds,
    findOneById,
    update,
    remove, */
  };