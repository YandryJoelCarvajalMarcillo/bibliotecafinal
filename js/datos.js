function ObtenerUsuario(){
    var listaUsuario=JSON.parse(localStorage.getItem('listaUsuariosLS'));

    if(listaUsuario==null){
        listaUsuario=
        [
            ['1','Juan','Perez','admin@gmail.com','admin','1'],
            ['2','Jose','Reyes','cliente@gmail.com','cliente','2']
        ]
    }
    return listaUsuario;
}

function validarCredenciales(pCorreo,pContraseña){
    var listaUsuario=ObtenerUsuario();
    var bAcceso=false;

    for(var i=0; i<listaUsuario.length; i++){
        if(pCorreo==listaUsuario[i][3]&&pContraseña==listaUsuario[i][4]){
            bAcceso=true;
            sessionStorage.setItem('usarioActivo',listaUsuario[i][1]+''+listaUsuario[i][2]);
            sessionStorage.setItem('rolUsuarioActivo',listaUsuario[i][5]);
        }
    }
    return bAcceso;
}