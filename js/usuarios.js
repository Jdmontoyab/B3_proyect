const express = require('express');
const validaciones = require('./validaciones');
const app = express();
const port = 2000;

app.use(express.json());

app.listen(port, () => {
    console.log('Servidor corriendo por el puerto ' + port);
});

let usuarios = [
    {id:1, Usuario: "Usuario1", NombreCompleto: "Alejandro Roldan", email: "alejo@proyecto.com", Telefono: "3334212", DireccionEnvio: "Calle siempre viva", Contraseña: "Cont1"},
    {id:2, Usuario: "Usuario2", NombreCompleto: "Julian Montoya", email: "julian@proyecto.com", Telefono: "3676545", DireccionEnvio: "Calle larga", Contraseña: "Cont2"},
    {id:3, Usuario: "Usuario3", NombreCompleto: "Sergio Castro", email: "sergio@proyecto.com", Telefono: "3885643", DireccionEnvio: "Calle corta", Contraseña: "Cont3"}
];

app.post('/usuarios/', (req, res) => {
    let usuario = req.body;
    usuarios.push(usuario);
    res.send(usuarios);
});