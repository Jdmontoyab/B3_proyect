//instalar my sql o mysql2

//llamar libreria
const mysql = require('mysql2');

// crear conexión con datos de la Base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'prueba',
    password: 'Ingagr18',
    port: 3306
  });

//Comprobar conexion
conexion.connect(function(err) {
   if (err) throw err;
   console.log("Conectado a la Base de datos");
 });

  //Comprobar en la consola que responda: "Conectado a la Base de datos"

  conexion.query("SELECT * FROM prueba.admin_pedidos where id=1;", function (
    err,
    result,
    fields
  ) {
    if (err) throw err;
    console.log(result);
  });