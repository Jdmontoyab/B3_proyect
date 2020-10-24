const jwt = require("jsonwebtoken");

const SECRET = "70k3n1d";
const ADMIN_IDROLE = 2;

const validateLogin = (req, res, next) => {
    try {
        const { username, password } = req.body;
        if ((!username) && password)
            return res.status(400).json({ error: "No Login 1" });
            next();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
};

const validateToken = async (req, res, next) => {
try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if (!token) return res.status(401).json({ error: "Access denied. 1" });
  
    await jwt.verify(token, SECRET, (error, data) => {
        if (error) return res.status(401).json({ error: "Access denied. 2" });
            req.body.userId = data.id;
            req.body.roleId = data.roleId;
            next();
        });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

/* const validarCrear = (req, res, next) => {
    let usuario = req.body;
    res.send
    if(typeof(usuario.Usuario) === "string" 
        && typeof(usuario.NombreCompleto) === "string" 
        && typeof(usuario.email) ==="string" 
        && typeof(usuario.Telefono) === "number" 
        && typeof(usuario.DireccionEnvio)  ==="string" 
        && typeof(usuario.Contraseña) ==="string"
        && typeof(usuario.RolUsuario === "number") ){

            //validando RolUsuario
            if (usuario.RolUsuario !== 1 && usuario.RolUsuario !== 2 ) {
                return res.send('Debe ingresar el número 1 para Rol de ADMIN ó el número 2 para Rol CLIENTE');
            }

            //validando longitud de constraseña (6 caracteres permitidos)
            if(usuario.Contraseña.length !== 6){
                return res.send("Contraseña invalida")
            }
       
            next();
        }else{res.send("Asegurese de haber ingresado los datos correctamente")}
    }else{res.send("datos incompletos")}
})
    try {
      const schema = Joi.object({
        email: Joi.string().min(6).max(100).required().email(),
        password: Joi.string().min(6).max(30).required(),
        username: Joi.string().min(6).max(30).required(),
        fullname: Joi.string().min(6).max(200).required(),
        cellphone: Joi.string().min(7).max(20).required(),
        shippingAddress: Joi.string().min(6).max(200).required(),
        roleId: Joi.number().integer().min(0).max(20),
      });
  
      const validate = schema.validate(req.body);
  
      if (validate.error)
        return res.status(400).json({ error: validate.error.message });
      next();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }; */

/* const validarSiExiste = (req, res, next) => {
    const { id } = req.body;
    next();
    const i = productos.findIndex(p => {
        return p.id == id;
    });
    if (i >= 0) {
        return res.status(409).json('El id ingresado ya existe!');
    }
    return next();
}

const validarProducto = (req, res, next) => {
    const { id, nombre, nombreCorto, precio } = req.body;
    if (!id || !nombre || !nombreCorto || !precio) {
        return res.status(404).json('Datos incompletos!');
    }
    return next();
}

function validarTipoDato(req, res, next) {
    const { id, nombre, nombreCorto, precio } = req.body;
    
} */

module.exports = {
    validateLogin,
    validateToken
    /* validarSiExiste,
    validarProducto,
    validarTipoDato */
};