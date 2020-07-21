let mongoose = require('mongoose'); // se realiza conexion a bd

mongoose.connect('mongodb://localhost:27017/crud', { useMongoClient: true }); //mongodb://localhost:27017/crud

module.exports = mongoose;