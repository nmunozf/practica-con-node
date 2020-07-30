const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add',(req,res)=>{
    res.render('belongings/add');
});

router.post('/add',async(req,res)=>{
    const {titulo,descripcion} = req.body;
    const newBelongings ={
        titulo,
        descripcion
    };
    await pool.query('insert into pertenencias set ?',[newBelongings]);
    res.redirect('/belongings'); 
});

router.get('/',async(req,res)=>{
    const belongings = await pool.query('select * from pertenencias');
    //console.log(belongings);
    res.render('belongings/list',{belongings});
});

// exportar rutas
module.exports = router;