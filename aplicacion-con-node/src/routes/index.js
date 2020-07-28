const express = require('express');
const router = express.Router();

// rutas 
router.get('/',(req,res)=>{
    res.send('hola mundo');
});

// exportar rutas
module.exports = router;