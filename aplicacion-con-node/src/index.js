const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// inicializacion
const app = express();

// configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views')); // busca ubicacion carpeta views
app.engine('.hbs',exphbs({
    defaultLayout : 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// middlwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// variables globales
app.use((req,res,next)=>{
    next();
});

// rutas
app.use(require('./routes/index'));
app.use(require('./routes/authentication'));
app.use('/belongings',require('./routes/belongings'));

// archivos publicos
app.use(express.static(path.join(__dirname, 'public')));

// iniciar el servidor

app.listen(app.get('port'),()=>{
    console.log(`Servidor iniciado en el puerto ${app.get('port')}`);
});
