var lista = ["Nel prro", "Oie no lo sé", "Ahuevo que sí", "Mejor matate alv", "La neta no te creo"]

function adivina(){
	var imagen = document.getElementById("imagen");
	
	var usuarioElige = prompt("¿Qué os hace venir hacia mí? Dime qué quieres saber...");
	var resultado  = lista[Math.round(Math.random()*4)];
	alert(resultado);
}