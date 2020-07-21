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
    })
    res.send('hola mundo');

});

module.exports = router; //se exportan las rutas en variable router
