//Invocamos a la conexion de la DB
const conexion = require('../databases/db');
const bcrypt = require('bcrypt');

//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const user = req.body.usuario;
    const contraseña = req.body.contraseña;
    const Correo = req.body.Correo;
    const telefono = req.body.telefono;
   
 if(user==""||contraseña==""||Correo==""||telefono==""){
     console.log("no vqle");
     debugger;
     res.redirect('/registro.html');  
 }else{
     console.log("si vale");
     conexion.query('INSERT INTO usuarios SET ?',{USERNAME:user, CONTRASENA:contraseña,CORREO:Correo,CELULAR:telefono,TIP_ID_TIPO:0}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/sesion.html');         
        }
 }
  )};
 }