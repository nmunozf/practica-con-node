const { format,register } = require('timeago.js');


// para ver la fecha de creacion de las pertenencias
const helpers = {};



  
helpers.timeago= (timestamp)=>{
    // Se traducen los mensajes al lenguaje español
    const localeFunc = (number, index, totalSec)=> {
        // number: the timeago / timein number;
        // index: the index of array below;
        // total_sec: total seconds between date to be formatted and today's date;
        return [
          ['Creado recientemente', 'right now'],
          ['Creado hace %s segundos', 'in %s seconds'],
          ['Creado hace 1 minuto', 'in 1 minute'],
          ['Creado hace %s minutos', 'in %s minutes'],
          ['Creado hace 1 hora', 'in 1 hour'],
          ['Creado hace %s horas', 'in %s hours'],
          ['Creado hace 1 dia', 'in 1 day'],
          ['Creado hace %s dias', 'in %s days'],
          ['Creado hace 1 semana', 'in 1 week'],
          ['Creado hace %s semanas', 'in %s weeks'],
          ['Creado hace 1 mes', 'in 1 month'],
          ['Creado hace %s meses', 'in %s months'],
          ['Creado hace 1 año', 'in 1 year'],
          ['Creado hace %s años', 'in %s years']
        ][index];
      };
    //se le da el idioma español al formato de fecha
    register('idioma-local', localeFunc);

    return format(timestamp,'idioma-local');
};

module.exports = helpers;