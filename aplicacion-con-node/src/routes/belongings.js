const express = require('express');
const router = express.Router();

const pool = require('../database');

const { isLoggedIn } = require('../lib/auth'); //para proteger las rutas 

router.get('/add', isLoggedIn, (req,res)=>{
    res.render('belongings/add');
});

router.post('/add',isLoggedIn, async(req,res)=>{
    
    const {titulo,descripcion} = req.body;
    const newBelongings ={
        titulo,
        descripcion,
        usuario_id: req.user.id
    };
    await pool.query('insert into pertenencias set ?',[newBelongings]);
    req.flash('success','Pertenencia ingresada correctamente');
    res.redirect('/belongings'); 
   
});

router.get('/',isLoggedIn, async(req,res)=>{
    const belongings = await pool.query('select * from pertenencias where usuario_id = ?',[req.user.id]);
    //console.log(belongings);
    res.render('belongings/list',{belongings});
});

router.get('/delete/:id',isLoggedIn, async(req,res)=>{
    const {id} = req.params;
    await pool.query('delete from pertenencias where id = ?',[id]);
    req.flash('success','Pertenencia eliminada correctamente');
    res.redirect('/belongings'); 
});

router.get('/edit/:id',isLoggedIn, async(req,res)=>{
    const {id} = req.params;
    const pertenencia = await pool.query('select * from pertenencias where id = ?',[id]);
    res.render('belongings/edit',{pertenencia: pertenencia[0]}); 
});

router.post('/edit/:id',isLoggedIn, async(req,res)=>{
    const {id} = req.params;
    const {titulo,descripcion} = req.body;
    const newBelongings ={
        titulo,
        descripcion
    };
    await pool.query('update pertenencias set ? where id = ?',[newBelongings,id]);
    req.flash('success','Pertenencia editada correctamente');
    res.redirect('/belongings');
});

// exportar rutas
module.exports = router;