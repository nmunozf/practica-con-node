const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('../lib/helpers');

passport.use('local.signin', new LocalStrategy({ //para login
    usernameField: 'nombreUsuario',
    passwordField: 'contraseña',
    passReqToCallback: true
},async(req,nombreUsuario,contraseña,done)=>{
    const rows = await pool.query('SELECT * FROM usuarios WHERE nombreUsuario = ?', [nombreUsuario]);
    if (rows.length > 0) {
        const usuario = rows[0];
        const validarContraseña = await helpers.compararContraseña(contraseña, usuario.contraseña);
        if (validarContraseña) {
          done(null, usuario, req.flash('success', 'Bienvenido ' + usuario.nombreUsuario));
        } else {
          done(null, false, req.flash('message', 'Contraseña incorrecta'));
        }
    } else {
        return done(null, false, req.flash('message', 'El usuario no existe.'));
    }
}));

passport.use('local.signup', new LocalStrategy({ // para ingresar usuarios a la base de datos
    usernameField: 'nombreUsuario',
    passwordField: 'contraseña',
    passReqToCallback: true
}, async(req,nombreUsuario,contraseña,done)=>{
    const {nombreCompleto} = req.body;
    const newUsuario ={
        nombreUsuario,
        contraseña,
        nombreCompleto
    };
    newUsuario.contraseña = await helpers.encriptarContraseña(contraseña);

    const result = await pool.query('insert into usuarios set ?',[newUsuario]);
    newUsuario.id = result.insertId;
    return done(null,newUsuario);
}));


passport.serializeUser((usuario, done) => {
    done(null, usuario.id);
});

passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    done(null, rows[0]);
  });