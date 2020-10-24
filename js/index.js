const express = require('express');
//require("./database");

const app = express();
app.use(express.json());
const port = 3000;

const routeUsers = require("./routes/users");
const routeProducts = require("./routes/products");
//const rOrders = require("./routes/orders");

app.use("/api/users", routeUsers);
app.use("/api/products", routeProducts);
//app.use("/api/v1/orders", rOrders);

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

/* app.post("/login", (req, res) => {
    let data = req.body;
    console.log('Intento exitoso' + data);
    res.send(data);
}); */