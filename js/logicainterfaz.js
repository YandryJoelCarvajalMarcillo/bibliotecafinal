document.querySelector('#btnIngresar').addEventListener('click',iniciarSesion);

function iniciarSesion(){
    var sCorreo='';
    var sContraseña='';
    sCorreo=document.querySelector('#txtCorreo').value;
    sContraseña=document.querySelector('#txtContrasenna').value;

    bAcceso=validarCredenciales(sCorreo,sContraseña);
    console.log(bAcceso);
    if(bAcceso==true){
        ingresar();
    }else{
alert('no valido el usuario o contraseña');
}
}


function ingresar(){
    var rol=sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case '1':
            history.back();
            break;
            case '2':
            window.location.href='blog.html';
            break;
            default:
                window.location.href='Inicio de sesion1.html';
                break;
    }
}