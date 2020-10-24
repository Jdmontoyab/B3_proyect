const router = require("express").Router();

const { validateToken } = require("../middlewares/users");

//const { validateRequest } = require("../middlewares/products");

const access = require("../database/access/products");

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