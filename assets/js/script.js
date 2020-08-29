const inputName = document.getElementById("inputName");
const inputApellido = document.getElementById("inputApellido");
const inputCorreo = document.getElementById("inputCorreo");
const inputPass = document.getElementById("inputPass");
const inputCelular = document.getElementById("inputCelular");

const nombreMensaje = document.getElementById("nombreMensaje");
const apellidoMensaje = document.getElementById("apellidoMensaje");
const correoMensaje = document.getElementById("correoMensaje");
const passMensaje = document.getElementById("passMensaje");
const celularMensaje = document.getElementById("celularMensaje");

function validarFormulario(event){
    event.preventDefault();

    let nombreEsValido = ()=>{
        let esValido = true;

        if(inputName.value == ""){
            inputName.classList.add("alert");
            nombreMensaje.innerText = "Ingresa tu nombre por favor";
            inputName.placeholder = "Ej. Pepito";
            esValido = false;
        }
        return esValido;
    }

    let apellidoEsValido = ()=>{
        let esValido = true;

        if(inputApellido.value == ""){
            inputApellido.classList.add("alert");
            apellidoMensaje.innerText = "Ingresa tu apellido por favor";
            inputApellido.placeholder = "Ej. Pérez";
            esValido = false;
        }
        return esValido;
    }

    let correoEsValido = ()=>{
        let esValido = true;

        if(inputCorreo.value == ""){
            inputCorreo.classList.add("alert");
            correoMensaje.innerText = "Ingresa un correo electrónico por favor";
            inputCorreo.placeholder = "Ej. pepitoperez@dominio.com";
            esValido = false;
        }

        //validaciones minimas en caso de que cambien el type del input.
        //correo al menos debe tener 5 caracteres
        else if(inputCorreo.value.length < 5){ 
            inputCorreo.classList.add("alert");
            correoMensaje.innerText = "Ingresa un correo electrónico válido";
            inputCorreo.placeholder = "Ej. pepitoperez@dominio.com";
            esValido = false;
        }
        //correo debe tener una arroba
        else if(inputCorreo.value.indexOf('@') == -1){
            inputCorreo.classList.add("alert");
            correoMensaje.innerText = "Ingresa un correo electrónico válido";
            inputCorreo.placeholder = "Ej. pepitoperez@dominio.com";
            esValido = false;
        }
        //correo debe tener como maximo una arroba
        else if(inputCorreo.value.indexOf('@') != inputCorreo.value.lastIndexOf('@')){
            inputCorreo.classList.add("alert");
            correoMensaje.innerText = "Ingresa un correo electrónico válido";
            inputCorreo.placeholder = "Ej. pepitoperez@dominio.com";
            esValido = false;
        }
        //correo debe tener un punto luego del arroba
        else if(inputCorreo.value.indexOf('@') > inputCorreo.value.lastIndexOf('.')){
            inputCorreo.classList.add("alert");
            correoMensaje.innerText = "Ingresa un correo electrónico válido";
            inputCorreo.placeholder = "Ej. pepitoperez@dominio.com";
            esValido = false;
        }
        return esValido;
    }

    let passEsValido = ()=>{
        let esValido = true;

        if(inputPass.value == ""){
            inputPass.classList.add("alert");
            passMensaje.innerText = "Ingresa una contraseña por favor";
            esValido = false;
        }
        else if(inputPass.value.length < 8){
            inputPass.classList.add("alert");
            passMensaje.innerText = "Ingresa una contraseña de mínimo 8 caracteres";
            esValido = false;
        }

        return esValido;
    }

    let celularEsValido = ()=>{
        let esValido = true;

        if(inputCelular.value == ""){
            inputCelular.classList.add("alert");
            celularMensaje.innerText = "Ingresa un número de celular por favor";
            esValido = false;
        }
        //validaciones minimas en caso de que cambien el type del input.
        //celular debe ser numerico 
        else if(isNaN(inputCelular.value)){
            inputCelular.classList.add("alert");
            celularMensaje.innerText = "Ingresa un valor numérico por favor";
            esValido = false;
        }
        //celular debe tener 10 digitos.
        else if(inputCelular.value.length != 10){
            inputCelular.classList.add("alert");
            celularMensaje.innerText = "Ingresa un número de celular válido por favor";
            esValido = false;
        }

        return esValido;
    }

    if(nombreEsValido() & apellidoEsValido() & correoEsValido() & passEsValido() & celularEsValido()){
        swal({
            title: "Felicitaciones!",
            text: "Te has registrado correctamente!",
            icon: "success",
          });
        setTimeout(()=>{
            window.location = "./assets/pages/calculadora.html";
        }, 2000);
    }
    else{
        swal({
            title: "Oops...",
            text: "Ingresa correctamente tus datos!",
            icon: "error",
          });
    }
}

inputName.addEventListener("keydown", ()=>{
    inputName.classList.remove("alert");
    nombreMensaje.innerText = "";
});

inputApellido.addEventListener("keydown", ()=>{
    inputApellido.classList.remove("alert");
    apellidoMensaje.innerText = "";
});

inputCorreo.addEventListener("keydown", ()=>{
    inputCorreo.classList.remove("alert");
    correoMensaje.innerText = "";
});

inputPass.addEventListener("keydown", ()=>{
    inputPass.classList.remove("alert");
    passMensaje.innerText = "";
});

inputCelular.addEventListener("keydown", ()=>{
    inputCelular.classList.remove("alert");
    celularMensaje.innerText = "";
});