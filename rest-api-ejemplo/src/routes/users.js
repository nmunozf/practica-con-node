const {Router} = require('express'); // permite crear nuevas rutas
const router = Router();
const fetch = require('node-fetch');

router.get('/',async(req,res)=>{//consultar api desde la ruta y mostrar los datos
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    //console.log(users);
    res.json(users); // se muestra los datos de la api
});

module.exports = router; //se exportan las rutas en variable router
