const formulario = document.getElementById('formulario');
const inputs=document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,11}$/,
	cedula: /^\d{7,11}$/,  // 7 a 14 numeros.
	contraseña: /^.{4,12}$/, // 4 a 12 digitos.
    contraseña2: /^.{4,12}$/, // 4 a 12 digitos. 	
}


const campos = {
	fecha: false,
	nombre: false,
	url_c: false,
	email: false,
	telefono: false,
	descripcion:false,
	contraseña: false,
    contraseña2: false,
	apellido:false,
	cedula: false,
}
const ValidarFormulario =(e)=>{
 
switch(e.target.name) {
	case "nombre":
		if(expresiones.nombre.test(e.target.value)){
			document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');
			document.getElementById('name').classList.remove('controls-error');
			document.getElementById('name').classList.add('controls');
			campos['nombre'] = true;
			console.log(campos['nombre']);
		}else{
			document.getElementById('name').classList.remove('controls');
			document.getElementById('name').classList.add('controls-error');
			document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');
			campos['nombre'] = false;
			console.log(campos['nombre']);
		}
		break;
		case "apellido":
		if(expresiones.apellido.test(e.target.value)){
			document.querySelector('#grupo__apellido .formulario__input-error').classList.remove('formulario__input-error-activo');
			document.getElementById('apellido').classList.remove('controls-error');
			document.getElementById('apellido').classList.add('controls');
			campos['apellido'] = true;
		}else{
			document.getElementById('apellido').classList.remove('controls');
			document.getElementById('apellido').classList.add('controls-error');
			document.querySelector('#grupo__apellido .formulario__input-error').classList.add('formulario__input-error-activo');
			campos['apellido'] = false;
		}
		break;
	case "email":
		if(expresiones.correo.test(e.target.value)){
			document.querySelector('#grupo__correo .formulario__input-error').classList.remove('formulario__input-error-activo');
			document.getElementById('email').classList.remove('controls-error');
			document.getElementById('email').classList.add('controls');
			campos['email'] = true;
		}else{
			document.getElementById('email').classList.remove('controls');
			document.getElementById('email').classList.add('controls-error');
			document.querySelector('#grupo__correo .formulario__input-error').classList.add('formulario__input-error-activo');
			campos['email'] = false;
		}
		break;
		case "telefono":
			if(expresiones.telefono.test(e.target.value)){
				document.querySelector('#grupo__telefonos .formulario__input-error').classList.remove('formulario__input-error-activo');
				document.getElementById('telefono').classList.remove('controls-error');
				document.getElementById('telefono').classList.add('controls');
				campos['telefono'] = true;
			}else{
				document.getElementById('telefono').classList.remove('controls');
				document.getElementById('telefono').classList.add('controls-error');
				document.querySelector('#grupo__telefono .formulario__input-error').classList.add('formulario__input-error-activo');
				campos['telefono'] = false;
			}
			case "cedula":
			if(expresiones.cedula.test(e.target.value)){
				document.querySelector('#grupo__cedula .formulario__input-error').classList.remove('formulario__input-error-activo');
				document.getElementById('cedula').classList.remove('controls-error');
				document.getElementById('cedula').classList.add('controls');
				campos['cedula'] = true;
			}else{
				document.getElementById('cedula').classList.remove('controls');
				document.getElementById('cedula').classList.add('controls-error');
				document.querySelector('#grupo__cedula .formulario__input-error').classList.add('formulario__input-error-activo');
				campos['cedula'] = false;
			}
			break;
			case "contraseña":
				if(expresiones.contraseña.test(e.target.value)){
					document.querySelector('#grupo_contraseña .formulario__input-error').classList.remove('formulario__input-error-activo');
					document.getElementById('contraseña').classList.remove('controls-error');
					document.getElementById('contraseña').classList.add('controls');
					campos['contraseña'] = true;
				}else{
					document.getElementById('contraseña').classList.remove('controls');
					document.getElementById('contraseña').classList.add('controls-error');
					document.querySelector('#grupo_contraseña .formulario__input-error').classList.add('formulario__input-error-activo');
					campos['contraseña'] = false;
				}
				console.log(campos.contraseña);
			break;
			case "contraseña2":
				
				validarPassword2();
			break;
			

	};
}


const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('contraseña');
    const inputPassword2 = document.getElementById('contraseña2');

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById('contraseña2').classList.add('formulario__grupo-incorrecto');
        document.getElementById('contraseña2').classList.remove('formulario__grupo-correcto');
        document.querySelector('#grupo_contraseña2 .formulario__input-error').classList.add('formulario__input-error-activo');
        campos['contraseña'] = false;
    } else {
        document.getElementById('contraseña2').classList.remove('formulario__grupo-incorrecto');
        document.getElementById('contraseña2').classList.add('formulario__grupo-correcto');
        document.querySelector('#grupo_contraseña2 .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos['contraseña'] = true;
    }
}


function descripcions(){
	if(document.getElementById("comentarios").value==0){
		return false;
	}else{
		return true;
	}
}
function descripcions(){
	if(document.getElementById("comentarios").value==0){
		return false;
	}else{
		return true;
	}
}
function enviar(){
	
	var usuario =campos.nombre;
	
	var cedula =campos.cedula;
	var apellido=campos.apellido;
    var telefono=campos.telefono;
	var correo=campos.email;
	
	console.log(usuario);
  
    console.log(email);
    console.log(telefono);
    console.log(contraseña2);
    console.log(contraseña);
	if(  correo!=false && telefono!=false &&cedula!=false && apellido!=false&& usuario!=false  ){
		
	alert('Actualizado!! ');

	}else{
		alert('Faltan campos minimos ');	
        
	}

	
}

inputs.forEach((input) => {
	input.addEventListener('keyup',ValidarFormulario);
	input.addEventListener('blur', ValidarFormulario);
});

formulario.addEventListener('submit',(e) =>{
e.preventDefault();
});




    document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}








                            //Buscador de contenido


//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");


//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }

}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";

}


//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){


    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }



}

