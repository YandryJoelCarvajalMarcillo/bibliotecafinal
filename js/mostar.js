let bAcceso = sessionStorage.getItem('rolUsuarioActivo');
console.log(bAcceso);
switch(bAcceso){
    case '1':
      
        document.getElementById('inicio_sesion').style.display='none';
        document.getElementById('registro').style.display='none';
        document.getElementById('libro').style.display='';
        document.getElementById('sesion').style.display='';
document.getElementById('perfil').style.display='';
        break;
        case '2':
            document.getElementById('inicio_sesion').style.display='none';
            document.getElementById('registro').style.display='none';
            document.getElementById('libro').style.display='none';
            document.getElementById('sesion').style.display='';
document.getElementById('perfil').style.display='';
        break;
        default:
          
            document.getElementById('libro').style.display='none';
            document.getElementById('sesion').style.display='none';
 document.getElementById('perfil').style.display='none';
            break;
}

function eliminar(){
    sessionStorage.removeItem('rolUsuarioActivo');
    sessionStorage.removeItem('usarioActivo');
}
