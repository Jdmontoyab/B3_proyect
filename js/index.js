const express = require('express');
//require("./database");

const app = express();
app.use(express.json());
const port = 3000;

const rutaUsuarios = require("./rutas/usuarios");
const rutaProductos = require("./rutas/productos");
//const rOrders = require("./routes/orders");

app.use("/api/usuarios", rutaUsuarios);
app.use("/api/productos", rutaProductos);
//app.use("/api/v1/orders", rOrders);

app.listen(port, () => {
    console.log('Servidor iniciado en el puerto: ' + port);
});