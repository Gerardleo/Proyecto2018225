var formulario = document.getElementById("formulario");
var formulario2 = document.forms["formulario"];

var formulario3 = document.getsElementsByTagName("form);
var formulario4 = document.forms[0];


window.onload = iniciar;

function iniciar(){
	
	document.getElementById("btn").addEventListener('click',validar,false);
}

function validarNombre(){
		var elemento = document.getElementById("nombre");
		if(elemento.value == ""){
			alert("el campo esta vacio ");
			return false;
		}
	return true:
}