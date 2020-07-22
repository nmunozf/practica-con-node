const {Router} = require('express'); // permite crear nuevas rutas
const router = Router();

const mysqlConnection = require('../database');

router.get('/',(req,res)=>{
    mysqlConnection.query('select * from personas',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/:id',(req,res)=>{
    const {id} = req.params;
    mysqlConnection.query('select * from personas where id = ?',[id],  (err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);//para retornan 1 solo elemento
        }else{
            console.log(err);
        }
    });
});

router.post('/',(req,res)=>{
    const {id,nombre,edad} = req.body;
    const query = `
    call personaAgrOrEdit(?,?,?);
    `;
    mysqlConnection.query(query,[id,nombre,edad], (err,rows,fields)=>{
        if(!err){
            res.json({Status: 'Persona agregada'});
        }else{
            console.log(err);
        }
    } );
});

router.put('/:id',(req,res)=>{
    const {nombre,edad } = req.body;
    const {id} = req.params;

    const query = `
    call personaAgrOrEdit(?,?,?);
    `;

    mysqlConnection.query(query,[id,nombre,edad], (err,rows,fields)=>{
        if(!err){
            res.json({Status: 'Persona actualizada'});
        }else{
            console.log(err);
        }
    } );


});

router.delete('/:id', (req,res)=>{
    const {id} = req.params;

    mysqlConnection.query('delete from personas where id = ?',[id],  (err,rows,fields)=>{
        if(!err){
            res.json({Status: 'Persona eliminada'});//para retornan 1 solo elemento
        }else{
            console.log(err);
        }
    });

});

module.exports = router; //se exportan las rutas en variable router
