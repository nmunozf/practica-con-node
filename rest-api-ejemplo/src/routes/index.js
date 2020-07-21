const {Router} = require('express'); // permite crear nuevas rutas
const router = Router();
//rutas
router.get('/',(req,res)=>{
    res.json({"Nombre": "Nicolás"}); // se responde con un archivo json
});

module.exports = router; //se exportan las rutas en variable router