// Java del Inicio de Sesion
const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
form.onsubmit = (e)=>{
e.preventDefault(); //Impide el envio de formularios
//Si el correo electrónico y la contraseña están en blanco, entonces añada la clase "shake" en ella, si no, llame a la función especificada
(eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
(pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
setTimeout(()=>{ //eliminar la clase shake después de 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
}, 500);
eInput.onkeyup = ()=>{checkEmail();} //llamar a la función checkEmail en la entrada de correo electrónico keyup
pInput.onkeyup = ()=>{checkPass();} //llamando a la función checkPassword en la entrada pass keyup
function checkEmail(){ //Funcion de checkEmail
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //patrón para validar el correo electrónico
    if(!eInput.value.match(pattern)){ //Si el patrón no coincide, se añade un error y se elimina la clase válida
    eField.classList.add("error");
    eField.classList.remove("valid");
    let errorTxt = eField.querySelector(".error-txt");
    //Si el valor del correo electrónico no está vacío entonces muestra "por favor introduzca un correo electrónico válido" si no muestra "El correo electrónico no puede estar en blanco".
    (eInput.value != "") ? errorTxt.innerText = "Introduzca una dirección de correo electrónico válida" : errorTxt.innerText = "El correo electrónico no puede estar en blanco";
    }else{ //Si el patrón coincide, entonces elimina el error y añade una clase válida
    eField.classList.remove("error");
    eField.classList.add("valid");
    }
}
function checkPass(){ //Funcion de checkPass
    if(pInput.value == ""){ //Si pass está vacío, entonces añade un error y elimina la clase válida
    pField.classList.add("error");
    pField.classList.remove("valid");
    }else{ //Si pass está vacío, elimina el error y añade una clase válida
    pField.classList.remove("error");
    pField.classList.add("valid");
    }
}
//si eField y pField no contienen la clase de error que significa que el usuario llenó los detalles correctamente se ejecuta lo siguiente
if(!eField.classList.contains("error") && !pField.classList.contains("error")){
     window.location.href = form.getAttribute("action"); //Redirige al usuario a la url especificada que está dentro del atributo action de la etiqueta form
}
}
var back = document.getElementById('back'); // Suponiendo que la identificación del elemento del botón de retorno está de vuelta
back.onclick = function(){
 history.back(); // Regresa a la página anterior, también se puede escribir como history.go (-1)
};
// o
