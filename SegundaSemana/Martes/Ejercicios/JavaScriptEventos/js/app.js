function vaciar(){
	document.getElementById("num1").value="";
}

function Cuadrado(){
	var n = document.getElementById("num1");
	n.value = n.value * n.value;
}

function mayus(){
	var x = document.getElementById("nombre");
	x.value = x.value.toUpperCase();
}

function mostrarDatos(){
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