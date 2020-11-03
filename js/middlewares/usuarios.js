const jwt = require("jsonwebtoken");

const SECRET = "70k3n1d";
const ADMIN_IDROLE = 2;

const validarLogin = (req, res, next) => {
    try {
        const { usuario, contrasena } = req.body;
        if (!usuario || !contrasena)
            return res.status(400).json({ error: "Falta Usuario o Contraseña" });
            next();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
};

const validarCrearUsuario = (req, res, next) => {
    const { usuario, nombre_apellido, email, telefono, direccion, password, roleId } = req.body;
    if(usuario && nombre_apellido && email && telefono && direccion && password && roleId) {
        if (typeof(usuario) === "string"
        && typeof(nombre_apellido) === "string"
        && typeof(email) === "string"
        && typeof(telefono) === "string"
        && typeof(direccion) === "string"
        && typeof(password) === "string"
        && typeof(roleId) === "number"){
            if (roleId !==1 && roleId !==2){
                return res.status(400).json('El rol de usuario debe ser 1 para Clientes o 2 para Administrador');
            }
            if (password.length < 6) {
                return res.status(400).json('La contraseña debe tener al menos 6 caracteres');
            }
            next();
        } else {
            res.status(400).json('Datos Erroneos');
        }
    } else {
        res.status(400).json('Datos Erroneos o Incompletos');
    };
};

const validarToken = async (req, res, next) => {
try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if (!token) return res.status(401).json({ error: "Acceso no Autorizado" });
  
    await jwt.verify(token, SECRET, (error, data) => {
        if (error) return res.status(401).json({ error: "Acceso no Autorizado" });
        req.body.id = data.id;
        req.body.roleId = data.roleId;
        next();
        });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const validarPermisos = (req, res, next) => {
    try {
      if (req.body.roleId !== ADMIN_IDROLE){
         return res.status(403).json({ error: "No tiene permisos para realizar esta acción" }); 
      }
      next();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

module.exports = {
    validarLogin,
    validarCrearUsuario,
    validarToken,
    validarPermisos
    /* validarProducto,
    validarTipoDato */
};