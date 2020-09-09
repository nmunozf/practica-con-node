const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
//para login y ingresar usuarios
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');

// inicializacion
const app = express();

const {database} = require('./keys');
//ingresar usuarios
require('./lib/passport');
//const { initialize } = require('passport');


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
app.use(session({
    secret: 'nodemysqlsession',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
//para mandar mensajes flash entre vistas
app.use(flash());

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//para autentificacion de usuario
app.use(passport.initialize());
app.use(passport.session());


// variables globales
app.use((req,res,next)=>{
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
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
