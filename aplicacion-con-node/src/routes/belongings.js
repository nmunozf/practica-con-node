const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add',(req,res)=>{
    res.render('belongings/add');
});

router.post('/add',(req,res)=>{
    res.send('recibido');
});

// exportar rutas
module.exports = router;