const express = require('express');

const app = express();
app.use(express.json());
const port = 3000;

const rutaUsuarios = require("./rutas/usuarios");
const rutaProductos = require("./rutas/productos");
const rutaPedidos = require("./rutas/pedidos");

app.use("/api/usuarios", rutaUsuarios);
app.use("/api/productos", rutaProductos);
app.use("/api/pedidos", rutaPedidos);

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto: ' + port);
});