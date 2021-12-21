const conexion =require('./database/db');

exports.save=(req,res)=>{
   const user=req.formulario.usuario;
   console.log(user);
}