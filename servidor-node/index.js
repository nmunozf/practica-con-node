const express = require('express');
const path = require('path');
const app = express();


//app.use('/public',express.static('public'));
app.use(express.static(path.join(__dirname,"public"))); // direcciona pagina principal por defecto
app.use('/data',require('./routes')); // nueva ruta

//app.use('/data',require('./router'));

/*app.get('/',function(req,res){ // ruta direcciona a la pagina en html
    res.sendFile('/public/index.html',{
        root: __dirname
    });
});

app.get('/data',(req,res)=>{ // ruta direcciona a la pagina en html
    res.send({

        "nombre": "Nicolas",
        "apellido": "Muñoz"

    });
});*/

app.listen(3000,()=>{
    console.log('servicio iniciadoe en puerto 3000');
}); // servidor escucha por puerto 3000