let inputNombre = {};
let inputApellido = {};
let inputEmail = {};
let inputCantidad = {};
let quantityError = {};
let inputCategoria = {};
let categoryError = {};
let spanResultado = {};

const valorIngreso = 200;
let resultado = 0;

function obtenerDatos(){
    inputNombre = document.getElementById("name");
    nameError = document.getElementById('nameError');
    inputApellido = document.getElementById('lastname');
    lastnameError = document.getElementById('lastnameError');
    inputEmail = document.getElementById('email');
    emailError = document.getElementById('emailError');
    inputCantidad = document.getElementById('quantity');
    quantityError = document.getElementById('quantityError');
    inputCategoria = document.getElementById('category');
    categoryError = document.getElementById('categoryError');
    spanResultado = document.getElementById('resultadoSeleccion');
}

function borrar(){
    inputNombre.value = "";
    nameError.innerHTML = "";
    inputApellido.value = "";
    lastnameError.innerHTML = "";
    inputEmail.value = "";
    emailError.innerHTML = "";
    inputCantidad.value = "";
    quantityError.innerHTML = "";
    inputCategoria.value = "";
    categoryError.innerHTML = "";
    spanResultado.innerHTML = "";
    resultado = 0;
}

function verificarEleccion(x){
    let campoError = x.name + "Error";
    campoError = document.getElementById(campoError);
    if(x.value == "" || x.value == 0 || x.value < 0){
        campoError.style.color = "red";
        campoError.style.fontSize = "0.8em";
        campoError.style.fontWeight = "bold";
        campoError.innerHTML = "Es necesario que complete este campo";
    } else { 
        campoError.innerHTML = "";
    }
}
function calcular(){
    obtenerDatos();
    
    verificarEleccion(inputNombre);
    verificarEleccion(inputApellido);
    verificarEleccion(inputEmail);
    verificarEleccion(inputCantidad);
    verificarEleccion(inputCategoria);

    let subtotal = inputCantidad.value * valorIngreso;

    if(inputCategoria.value == 1){
        resultado = subtotal * 0.2;
    } else if(inputCategoria.value == 2){
        resultado = subtotal * 0.5;
    } else if(inputCategoria.value == 3){
        resultado = subtotal * 0.85;
    } 
    
}

function dosDecimales(x) {
    return Number.parseFloat(x).toFixed(2);
  }

function resumen(){
    calcular();
    resultado = dosDecimales(resultado);
    spanResultado.innerHTML = resultado;
}

document.getElementById("resumen").onclick = resumen;
document.getElementById("borrar").onclick = borrar;