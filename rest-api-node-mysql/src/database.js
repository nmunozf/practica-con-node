const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nicolas123',
    database: 'prueba'
});

mysqlConnection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log('conexion exitosa');
    }
});

module.exports = mysqlConnection;