const router = require("express").Router();

const { validateToken } = require("../middlewares/usuarios");

//const { validateRequest } = require("../middlewares/products");

const access = require("../basededatos/acceso/productos");

router.post("/", validateToken, async (req, res) => {
    //res.send('ok Funcionó')
    try {
        await access.createProduct(req.body);
        res.json(req.body);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
);

module.exports = router;