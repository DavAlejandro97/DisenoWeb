/*
                    P R O T E C O
    Ejercicio 1
    Elaboró: David Alejandro Silva López, prebecario 15
    */

var usuarioElige = prompt("Escoje prro, ¿piedra, papel o tijera? | Respeta minúsculas por favor, soy medio estúpido :'v"); //Pide la opción del usuario
var computadoraElige = Math.random();                 //Crea el random para la elección de la computadora


/*
    La función random escoje valores entre 0 y y 1 por lo que para que la probabilidad sea igual en cada opción
    hago lo siguiente:
    */

    if (computadoraElige < 0.34){  
        computadoraElige = "piedra"; 
    }else if(computadoraElige <=0.67){ 
        computadoraElige = "papel"; 
    }else{ 
        computadoraElige = "tijera"; 
    } 

/*
    Comienza función para determinar el ganador, también se guarda en la variable "comparar" 
*/

    var comparar = function(eleccion1, eleccion2){ //eleccion1 = usuario | eleccion2 = computadora
        if(eleccion1 === eleccion2){ 
            return "¡Empate, shabo!"; 
        } 

        if(eleccion1 === "piedra"){ 
            if(eleccion2 === "tijera"){ 
                alert("¡Piedra gana!, Lo siento men, las computadoras dominarán el mundo >:v"); 
            }else{ 
                alert("¡Papel gana!, Eh we ganaste, felicidades :u");
            } 
        } 

        else if(eleccion1 === "papel"){ 
            if(eleccion2 === "piedra"){ 
                alert("¡Papel gana!, Lo siento men, las computadoras dominarán el mundo >:v");
            } 
            else{ 
                alert("¡Tijera gana!, Eh we ganaste, felicidades :u");
            } 
        } 

        else if(eleccion1 === "tijera"){ 
            if(eleccion2 === "papel"){ 
                alert("¡Tijera gana!, Lo siento men, las computadoras dominarán el mundo >:v");
            } 
            else{ 
                alert("¡Piedra gana!, Eh we ganaste, felicidades :u");
            } 
        } 
    } 


    // Encontré esto y según así se imprimen las cosas en la ventanita de consola del navegador :v
    console.log(comparar(computadoraElige, usuarioElige));
