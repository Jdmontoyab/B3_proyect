const express = require('express');
const validaciones = require('./validaciones');
const app = express();
const port = 2000;

app.use(express.json());

app.listen(port, () => {
    console.log('Servidor corriendo por el puerto ' + port);
});

let pedidos = [
    {idPedido:1, idProducto: 4, idEstadoPedido: 8, idUsuario: 11, horaPedido: "1800", descripcionPedido: "2x Focaccia", idPago: 14},
    {idPedido:2, idProducto: 5, idEstadoPedido: 9, idUsuario: 12, horaPedido: "2000", descripcionPedido: "2x hamb", idPago: 15},
    {idPedido:3, idProducto: 6, idEstadoPedido: 10, idUsuario: 13, horaPedido: "1700", descripcionPedido: "2x salch", idPago: 16}
]

app.get('/pedidos/:idPedido', (req, res) => {
    let idPedido = req.params.idPedido;
    for (let i = 0; i < pedidos.length; i++) {
        let pedido = pedidos[i];
        if (pedido.idPedido == idPedido) {
            res.json(pedido);
        }
    }
    res.status(404).json('El pedido no existe');
});

app.post('/pedidos/', validaciones.validarProducto, (req, res) => {
    let pedido = req.body;
    pedidos.push(pedido);
    res.send(pedidos);
});

app.put('/pedidos/', (req, res) => {
    let id = req.query.id;
    let nuevoPedido = req.body;
    for (let i = 0; i < pedidos.length; i++) {
        let pedido = pedidos[i];
        if (pedido.id == id) {
            pedidos.splice(i, 1); // Elimino el elemento del array (pedidos)
            pedidos.push(nuevoPedido); // Agrega los campos definidos para la actualización
            res.json(pedidos);
        }
    }
    res.status(404).json('El pedido no existe');
});