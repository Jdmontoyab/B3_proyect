const express = require('express');
const validaciones = require('./validaciones');
const app = express();
const port = 2000;

app.use(express.json());

app.listen(port, () => {
    console.log('Servidor corriendo por el puerto ' + port);
});

// Array para las pruebas //

let productos = [
    {id:1, nombre: "Hamburguesa Clasica", nombreCorto: "HamClas", precio: 660},
    {id:2, nombre: "Hamburguesa Especial", nombreCorto: "HamEsp", precio: 753},
    {id:3, nombre: "Sanduche Vegetariano", nombreCorto: "SanVeggie", precio: 320},
    {id:4, nombre: "Sanduche de Queso", nombreCorto: "SanQueso", precio: 238},
];

// Petición get, devuelve la info a partir de un id enviado como parámetro //

app.get('/productos/', validaciones.validarSiExiste, (req, res) => {
    let id = req.query.id;
    if (!id) {
        res.json(productos);
    } else {
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];
            if (producto.id == id) {
                res.json(producto);
            }
        }
    }
    res.status(404).json('El producto no existe');
});

// Petición post, Agrega un nuevo objeto (producto) al array //

app.post('/productos/', validaciones.validarProducto, (req, res) => {
    let producto = req.body;
    productos.push(producto);
    res.send(productos);
});

// Petición put, Busca a partir de un parámetro enviado, si lo encuentra lo elimina y reemplaza la info enviada en el body de la petición //

app.put('/productos/', (req, res) => {
    let id = req.query.id;
    let nuevoProducto = req.body;
    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];
        if (producto.id == id) {
            productos.splice(i, 1); // Elimino el elemento del array (productos) //
            productos.push(nuevoProducto); // Agrega los campos definidos para la actualización //
            res.json(productos);
        }
    }
    res.status(404).json('El producto no existe');
});

// Petición delete, Elimina un objeto del array a partir de un parámetro enviado (id) //

app.delete('/productos/', (req, res) => {
    let id = req.query.id;
    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];
        if (producto.id == id) {
            productos.splice(i, 1);
            res.json(productos);
        }
    }
    res.status(404).json('El producto no existe');
});