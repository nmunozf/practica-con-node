const {format} = require('timeago.js');
// para ver la fecha de creacion de las pertenencias
const helpers = {};

helpers.timeago= (timestamp)=>{
    return format(timestamp);
};

module.exports = helpers;