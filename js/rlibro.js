const formulario = document.getElementById('formulario');
const inputs=document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	direccion: /^[a-zA-ZÀ-ÿ\s]{1,200}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,13}$/, // 7 a 14 numeros.
	titulo: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	paginas: /^\d{3,4}$/,
	publicacion: /^\d{4}$/,
	editorial: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	edicion: /^\d{1}$/,
	precio: /([0-9,]+(.[0-9]{2})?)/,
	cantidad: /^\d{1,3}$/,
	idioma:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	materia:/^[a-zA-ZÀ-ÿ\s]{1,30}$/,
	resumen: /^[a-zA-ZÀ-ÿ\s]{1,200}$/, // Letras y espacios, pueden llevar acentos.


}


const campos = {
	
	nombre: false,
	apellido: false,
	direccion: false,
	url_c: false,
	email: false,
	codigo: false,
	telefono: false,
	descripcion:false,
	titulo: false,
	paginas: false,
	publicacion:false,
	editorial: false,
	edicion: false,
	precio: false,
	cantidad: false,
	idioma: false,
	materia: false,
	resumen:false,

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
			console.log(campos['apellido']);
		}else{
			document.getElementById('apellido').classList.remove('controls');
			document.getElementById('apellido').classList.add('controls-error');
			document.querySelector('#grupo__apellido .formulario__input-error').classList.add('formulario__input-error-activo');
			campos['apellido'] = false;
			console.log(campos['apellido']);
		}
		break;
		case "direccion":
		if(expresiones.apellido.test(e.target.value)){
			document.querySelector('#grupo__direccion .formulario__input-error').classList.remove('formulario__input-error-activo');
			document.getElementById('direccion').classList.remove('controls-error');
			document.getElementById('direccion').classList.add('controls');
			campos['direccion'] = true;
			console.log(campos['direccion']);
		}else{
			document.getElementById('direccion').classList.remove('controls');
			document.getElementById('direccion').classList.add('controls-error');
			document.querySelector('#grupo__direccion .formulario__input-error').classList.add('formulario__input-error-activo');
			campos['direccion'] = false;
			console.log(campos['direccion']);
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
			break;
			case "titulo":
		if(expresiones.titulo.test(e.target.value)){
			document.querySelector('#grupo__titulo .formulario__input-error').classList.remove('formulario__input-error-activo');
			document.getElementById('titulo').classList.remove('controls-error');
			document.getElementById('titulo').classList.add('controls');
			campos['titulo'] = true;
			console.log(campos['titulo']);
		}else{
			document.getElementById('titulo').classList.remove('controls');
			document.getElementById('titulo').classList.add('controls-error');
			document.querySelector('#grupo__titulo .formulario__input-error').classList.add('formulario__input-error-activo');
			campos['titulo'] = false;
			console.log(campos['titulo']);
		}
		break;
		case "paginas":
			if(expresiones.paginas.test(e.target.value)){
				document.querySelector('#grupo__paginas .formulario__input-error').classList.remove('formulario__input-error-activo');
				document.getElementById('paginas').classList.remove('controls-error');
				document.getElementById('paginas').classList.add('controls');
				campos['paginas'] = true;
			}else{
				document.getElementById('paginas').classList.remove('controls');
				document.getElementById('paginas').classList.add('controls-error');
				document.querySelector('#grupo__paginas .formulario__input-error').classList.add('formulario__input-error-activo');
				campos['paginas'] = false;
			}
			break;
			case "publicacion":
			if(expresiones.publicacion.test(e.target.value)){
				document.querySelector('#grupo__publicacion .formulario__input-error').classList.remove('formulario__input-error-activo');
				document.getElementById('publicacion').classList.remove('controls-error');
				document.getElementById('publicacion').classList.add('controls');
				campos['publicacion'] = true;
			}else{
				document.getElementById('publicacion').classList.remove('controls');
				document.getElementById('publicacion').classList.add('controls-error');
				document.querySelector('#grupo__publicacion .formulario__input-error').classList.add('formulario__input-error-activo');
				campos['publicacion'] = false;
			}
			break;
			case "editorial":
		if(expresiones.editorial.test(e.target.value)){
			document.querySelector('#grupo__editorial .formulario__input-error').classList.remove('formulario__input-error-activo');
			document.getElementById('editorial').classList.remove('controls-error');
			document.getElementById('editorial').classList.add('controls');
			campos['editorial'] = true;
			console.log(campos['editorial']);
		}else{
			document.getElementById('editorial').classList.remove('controls');
			document.getElementById('editorial').classList.add('controls-error');
			document.querySelector('#grupo__editorial .formulario__input-error').classList.add('formulario__input-error-activo');
			campos['editorial'] = false;
			console.log(campos['editorial']);
		}
		break;
		case "edicion":
			if(expresiones.edicion.test(e.target.value)){
				document.querySelector('#grupo__edicion .formulario__input-error').classList.remove('formulario__input-error-activo');
				document.getElementById('edicion').classList.remove('controls-error');
				document.getElementById('edicion').classList.add('controls');
				campos['edicion'] = true;
			}else{
				document.getElementById('edicion').classList.remove('controls');
				document.getElementById('edicion').classList.add('controls-error');
				document.querySelector('#grupo__edicion .formulario__input-error').classList.add('formulario__input-error-activo');
				campos['edicion'] = false;
			}
			break;
			case "idioma":
		if(expresiones.idioma.test(e.target.value)){
			document.querySelector('#grupo__idioma .formulario__input-error').classList.remove('formulario__input-error-activo');
			document.getElementById('idioma').classList.remove('controls-error');
			document.getElementById('idioma').classList.add('controls');
			campos['idioma'] = true;
			console.log(campos['idioma']);
		}else{
			document.getElementById('idioma').classList.remove('controls');
			document.getElementById('idioma').classList.add('controls-error');
			document.querySelector('#grupo__idioma .formulario__input-error').classList.add('formulario__input-error-activo');
			campos['idioma'] = false;
			console.log(campos['idioma']);
		}
		break;
		case "materia":
		if(expresiones.materia.test(e.target.value)){
			document.querySelector('#grupo__materia .formulario__input-error').classList.remove('formulario__input-error-activo');
			document.getElementById('materia').classList.remove('controls-error');
			document.getElementById('materia').classList.add('controls');
			campos['materia'] = true;
			console.log(campos['materia']);
		}else{
			document.getElementById('materia').classList.remove('controls');
			document.getElementById('materia').classList.add('controls-error');
			document.querySelector('#grupo__materia .formulario__input-error').classList.add('formulario__input-error-activo');
			campos['materia'] = false;
			console.log(campos['materia']);
		}
		break;
			case "precio":
			if(expresiones.precio.test(e.target.value)){
				document.querySelector('#grupo__precio .formulario__input-error').classList.remove('formulario__input-error-activo');
				document.getElementById('precio').classList.remove('controls-error');
				document.getElementById('precio').classList.add('controls');
				campos['precio'] = true;
			}else{
				document.getElementById('precio').classList.remove('controls');
				document.getElementById('precio').classList.add('controls-error');
				document.querySelector('#grupo__precio .formulario__input-error').classList.add('formulario__input-error-activo');
				campos['precio'] = false;
			}
			break;
			case "cantidad":
			if(expresiones.cantidad.test(e.target.value)){
				document.querySelector('#grupo__cantidad .formulario__input-error').classList.remove('formulario__input-error-activo');
				document.getElementById('cantidad').classList.remove('controls-error');
				document.getElementById('cantidad').classList.add('controls');
				campos['cantidad'] = true;
			}else{
				document.getElementById('cantidad').classList.remove('controls');
				document.getElementById('cantidad').classList.add('controls-error');
				document.querySelector('#grupo__cantidad .formulario__input-error').classList.add('formulario__input-error-activo');
				campos['cantidad'] = false;
			}
			break;
			case "resumen":
		if(expresiones.resumen.test(e.target.value)){
			document.querySelector('#grupo__resumen .formulario__input-error').classList.remove('formulario__input-error-activo');
			document.getElementById('resumen').classList.remove('controls-error');
			document.getElementById('resumen').classList.add('controls');
			campos['resumen'] = true;
			console.log(campos['resumen']);
		}else{
			document.getElementById('resumen').classList.remove('controls');
			document.getElementById('resumen').classList.add('controls-error');
			document.querySelector('#grupo__resumen .formulario__input-error').classList.add('formulario__input-error-activo');
			campos['resumen'] = false;
			console.log(campos['resumen']);
		}
		break;			
	};
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

inputs.forEach((input) => {
	input.addEventListener('keyup',ValidarFormulario);
	input.addEventListener('blur', ValidarFormulario);
});

formulario.addEventListener('submit',(e) =>{
e.preventDefault();
});

function enviar(){

	var email =campos.email;
	
	var direccion =campos.direccion;
	var apellido=campos.apellido;
    var telefono=campos.telefono;
	var codigo=campos.codigo;
	var titulo=campos.titulo;
	var editorial=campos.editorial;
	var precio=campos.precio;
	var cantidad=campos.cantidad;
	var nombre=campos.nombre;
	console.log(direccion);
  
    console.log(email);
    console.log(telefono);

	console.log(direccion);
  
    console.log(email);
    console.log(telefono);
  
	if( nombre!=false && cantidad!=false && precio!=false && editorial!=false &&  titulo!=false && direccion!=false &&   email!=false && telefono!=false  && apellido!=false  ){
		
	alert('Imgresado ');

	}else{
		alert('Faltan campos minimos ');	
        
	}
	}

