function cambiarColor(){
	var color = document.getElementById("color").value;
	var texto = document.getElementsByClassName("cambiarClase");
	texto[0].style.color = color;	
}

