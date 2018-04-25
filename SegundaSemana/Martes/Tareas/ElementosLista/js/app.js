
var lista = []; 

function add(){
	var prebe = document.getElementById("nombre").value;
	lista.push(prebe);

	document.getElementById("area").value = "";

	for (var i = 0; i < lista.length; i++) {
		document.getElementById("area").value += lista[i] + ", "
	}

	document.getElementById("nombre").value = "";




/*
	var salida = '<h2>Lista de prebes</h2>' + "<div><form name='formulario'><ol>";

	for (var i = 0; i < lista.length; i++) {
		salida+= '<li>' + lista[i] + '</li>';
	}
	salida += "</ol></div>";*/
}

/*function llenarLista(){


	var contador = 1;
	var a = "a", b = "b", c = "c", d ="d", e = "e";
	var opciones = [a,b,c,d,e];
	var num_preguntas = 10;
	var salida = '<h2>Hoja de respuestas </h2>' + '<form name="formulario">' + '<label for="nombre"> Nombre </label> <ol>';


	for (var i = 1; i <= num_preguntas; i++) {
		salida+='<li>';
		for (var j = 0; j < 5; i++) {
			salida+= '<input id="test' + contador + '" type = "radio" name = "pregunta[' + i + ']" value="' + opciones[j] + '"/>' +
			'<label for ="test' + contador + '">' + opciones[j] + '</label>';
			contador++; 
		}
		salida+='</li>';
	}
}
*/
