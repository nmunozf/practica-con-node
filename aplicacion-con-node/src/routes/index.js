const express = require('express');
const router = express.Router();

const pool = require('../database');
// rutas 
router.get('/',(req,res)=>{
    res.render('index');
});

// exportar rutas
module.exports = router;