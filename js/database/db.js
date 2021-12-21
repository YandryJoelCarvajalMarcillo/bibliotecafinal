var mysql = require('mysql');
var conexion = mysql.createConnection({
    //Parametros de conexion
    host : 'localhost',
    database : 'biblioteca',
    user : 'biblioteca',
    password : 'biblioteca2021'
});

//Funcion conectar
conexion.connect(function(error){
    if (error) {
        throw error;
    }else{
        console.log('Conexion Exitosa');
    }
});
module.exports = conexion;

