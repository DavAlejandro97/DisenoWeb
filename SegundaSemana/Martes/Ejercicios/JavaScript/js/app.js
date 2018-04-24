var miElementoDOM = document.getElementById("miParrafo");
document.getElementById("insertando").innerHTML ="Vamos a agregar contenido aqui" + miElementoDOM.innerHTML;

var arregloP = document.getElementsByTagName("p");
alert("Hay"+arregloP.length+"<p> en este documento");
document.getElementById("insertando").innerHTML ='<span>' +'El segundo parrafo con indice 1:'+arregloP[1].innerHTML+'</span>'

var listaClases = document.getElementsByClassName("miclase");
listaClases[0].style.color='red';	


document.getElementById("cambiando").src ="img/pololu.jpg";
var lista = document.getElementById("miUl");
lista.removeChild(lista.childNodes[1]);


document.getElementById("cambiarClase").className+="miDivAmarillo";