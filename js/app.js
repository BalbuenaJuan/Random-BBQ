/**
 * 
 * CREADO POR JUAN BALBUENA EL 07/09/2016
 * 
 */


var apnd = document.getElementById("random__bbq--js");

var myArray = [" Rufles Original", " Aceitunas", " Lays al punto de sal", " Doritos TexMex", " Nachos", " Galletas saladas", 
               " Rufles Jamon Jamon", " Cerveza", " Coca-cola", " Kas naranja", " Pepinillos", " Banderillas", " Frutos secos",
               " Cacahuetes", " Mojitos", " Choripanes", " Mini empanadillas", " Lays campesinas" 
              ];

var cuatroRandom=[];
var posicionesElegibles=[];
var i,r;

for ( i = 0; i < myArray.length; i++) { 
    posicionesElegibles[i] = i; 
};

for (i = 0; i < 4; i++){

	r=Math.floor(Math.random()*posicionesElegibles.length);
	
    cuatroRandom.push(myArray[posicionesElegibles[r]]);
	
    posicionesElegibles.splice(r,1);
}

apnd.innerHTML = (cuatroRandom.toString());

var button = document.getElementById("button__refresh");

button.addEventListener("click", function(){
    location.reload();
})




