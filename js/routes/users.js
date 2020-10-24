const router = require("express").Router();

const { validateLogin } = require("../middlewares/users");

const jwt = require("jsonwebtoken");
const access = require("../database/access/users");

const SECRET = "70k3n1d";

router.post("/login", validateLogin, async (req, res) => {
  try {
      const { password } = req.body;
      //console.log(password);

      const user = await access.findByUsername(req.body);

      //console.log(user[0].password);

      if (!user.length) {
        return res.status(401).json({ error: "No Login 2" });
      }
    
      if (user[0].password == password) {
        const payload = {
          id: user[0].id,
          roleId: user[0].roleId,
          user: user[0].username
        }

        const token = jwt.sign(payload, SECRET);
        console.log(token);
        return res.header("auth-token", token).json({ token });
      } else {
        return res.status(401).json({ error: "No Login 3" });
      }
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
});

/* router.post("/", validarCrear, async (req, res) => {
  console.log('Checkpoint');
  try {
    const user = await Dao.findByEmailOrUsername(req.body);
    if (user.length)
      return res.status(409).json({ error: "Resource already exists." });

    await Dao.create(req.body);
    res.json(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}); */

module.exports = router;