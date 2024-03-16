//El Señor de los Anillos

function Personaje(nombre){

    this.nombre = nombre;
    this.vida = 100;
    this.sp = 100;

    this.curar = function (jugadorObjeto){
        jugadorObjeto.vida +=10;
    }

}


var personaje1 = new Personaje("Gandalf");
var personaje2 = new Personaje("Legolas");

console.log(personaje1);
console.log(personaje2);

personaje1.curar(personaje2);
console.log(personaje2);