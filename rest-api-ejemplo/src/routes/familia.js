const {Router} = require('express'); // permite crear nuevas rutas
const router = Router();
const __ = require('underscore');

const familia = require('../sample.json');
//console.log(familia);

router.get('/',(req,res)=>{
    res.json(familia);
});

router.post('/',(req,res)=>{
    const {id, nombre, edad} = req.body //body recibe lo que es enviado 
    if(id && nombre && edad){
        const newFamilia = {...req.body}; // se almacena datos ingresados en objeto
        familia.push(newFamilia); // se ingresan al archivo 
        res.json(familia); // se muestran todos los datos actualizados

    }else{
        res.json('datos incompletos');
    }
});

router.put('/:id',(req, res)=>{// ruta para actualizar
    const {id} = req.params;
    const {nombre, edad} = req.body //body recibe lo que es enviado
    if(nombre && edad){
        __.each(familia, (fam, i) =>{
            if(fam.id == id){
                fam.nombre = nombre;
                fam.edad = edad;
            }
        });
        res.json(familia);
    }else{
        res.status(500).json({error: 'error al actualizar'});
    }
    
});

router.delete('/:id',(req, res)=>{ // elimina un elemento
    const {id} = req.params;
    console.log(id);
    __.each(familia, (fam, i) =>{
        if(fam.id == id){
            familia.splice(i, 1);
        }
    });
    res.json(familia);
});

module.exports = router; //se exportan las rutas en variable router