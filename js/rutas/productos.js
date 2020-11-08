const router = require("express").Router();

const { validarToken, validarPermisos } = require("../middlewares/usuarios");

const { validarPeticion } = require("../middlewares/productos");

const acceso = require("../basededatos/acceso/productos");

router.post("/crear_p", validarPeticion, validarToken, validarPermisos, async (req, res) => {
    try {
        await acceso.crearProducto(req.body);
        res.json(req.body);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
);

router.get("/buscar_p", validarToken, async (req, res) => {
  try {
    const productos = await acceso.encontrarTodos();
    res.json(productos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/act_p/:id", validarPeticion, validarToken, validarPermisos, async (req, res) => {
  try {
    const { id } = req.params;

    let producto = await acceso.encontrarPorId(id);
      if (!producto.length) {
        return res.status(404).json({ error: "El Producto buscado no existe!" });
      }
      await acceso.actualizar(id, req.body);
      res.json(req.body);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

router.delete("/eli_p/:id", validarToken, validarPermisos, async (req, res) => {
  try {
    const { id } = req.params;

    let producto = await acceso.encontrarPorId(id);
    if (!producto.length) {
      return res.status(404).json({ error: "El Producto buscado no existe!" });
    }
    await acceso.eliminar(id);
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;