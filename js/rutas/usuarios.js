const router = require("express").Router();

const { validarLogin, validarCrearUsuario } = require("../middlewares/usuarios");

const jwt = require("jsonwebtoken");
const acceso = require("../basededatos/acceso/usuarios");

const SECRET = "70k3n1d";

router.post("/login", validarLogin, async (req, res) => {
  try {
      const usuario = await acceso.encontrarPorUsuario(req.body);

      const { contrasena } = req.body;

      if (!usuario.length) {
        return res.status(401).json({ error: "Usuario no registrado" });
      }
    
      if (usuario[0].password == contrasena) {
        const payload = {
          id: usuario[0].id,
          roleId: usuario[0].roleId,
          user: usuario[0].usuario
        }
        const token = jwt.sign(payload, SECRET);
        return res.header("auth-token", token).json({ token });
      } else {
        return res.status(400).json({ error: "Datos de acceso inválidos" });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

router.post('/crear', validarCrearUsuario, async (req, res)=>{
  try {
    const usuario = await acceso.encontrarPorUsuario(req.body);
    if (usuario.length) {
      return res.status(409).json({ error: "El usuario ya existe!" });
    }
    await acceso.crear(req.body);
    res.json(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;