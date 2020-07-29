const express = require('express');
const router = express.Router();

const pool = require('../database');
// rutas 
router.get('/',(req,res)=>{
    res.send('hola mundo');
});

// exportar rutas
module.exports = router;