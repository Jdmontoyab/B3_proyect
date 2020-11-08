const express = require('express');

const app = express();
app.use(express.json());
const port = 3000;

const rutaUsuarios = require("./rutas/usuarios");
const rutaProductos = require("./rutas/productos");
const rutaPedidos = require("./rutas/pedidos");

app.use("/api", rutaUsuarios);
app.use("/api", rutaProductos);
app.use("/api", rutaPedidos);

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto: ' + port);
});