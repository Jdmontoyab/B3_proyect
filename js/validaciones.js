const validarSiExiste = (req, res, next) => {
    const { id } = req.body;
    next();
    /* const i = productos.findIndex(p => {
        return p.id == id;
    });
    if (i >= 0) {
        return res.status(409).json('El id ingresado ya existe!');
    }
    return next(); */
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
    
}

module.exports = {
    validarSiExiste,
    validarProducto,
    validarTipoDato
};