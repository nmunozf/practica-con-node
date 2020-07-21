const express = require('express');
const app = express();
const morgan = require('morgan');
// principal index, donde se ejecuta el programa y se llaman las rutas
//configuraciones
app.set('port',process.env.PORT || 3000); // se establece puerto
app.set('json spaces', 2); // para ver formato json mas ordenado con espacio (opcional)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); // para entender datos que son enviados por medio de formularios
app.use(express.json());// para recibir y entender archivos tipo json

//rutas, se llaman de la carpeta rutas
app.use(require('./routes/index')); // se importan las rutas del otro archivo
app.use('/api/familia',require('./routes/familia')); // se comienza ruta con /api
app.use('/api/users',require('./routes/users'));

//iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`servidor iniciado en el puerto ${app.get('port')}`);
});