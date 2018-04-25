var listaAlumnos = [];

function Agregar(){
	var alumno = new Object();
	alumno.nombre = document.getElementById("nombre");
	alumno.edad = document.getElementById("edad");
	alumno.telefono = document.getElementById("telefono");
	listaAlumnos.push(alumno);
	var salida = document.getElementById("listaAlumnos");
	salida.value = "";
	salida.value = "******************** \n";
	for (var i = 0; i < listaAlumnos.length; i++) {
		for (var j = 0; j < 3; j++) {
			salida.value += listaAlumnos[i].hasOwnProperty(j) + " ";
		}
		salida.value = "\n";
	}
	//	salida.value = "********************";

}