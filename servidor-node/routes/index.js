const router = require('express').Router();



router.route('/').get((req,res)=>{ // ruta direcciona a la pagina en html
    res.send('Hola mundo ');
    
});


module.exports = router;