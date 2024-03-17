//El Señor de los Anillos

let configVida = window.prompt("Configura los puntos de vida con los que arrancan los personajes");

alert("La vida introducida es de " + configVida);

//Hay que convertir el valor introducido ya que por defecto es string, a número.
let numconfigVida = Number(configVida);

function Personaje(nombre, numconfigVida){

    this.nombre = nombre;
    this.vida = numconfigVida;
    this.sp = 100;

    this.curar = function (jugadorObjeto){
        if(this.vida>0){
            if (this.sp >=40){
                //Esta es la forma abreviada de escribir jugadorObjeto.vida = jugadorObjeto.vida + 10;
                jugadorObjeto.vida = jugadorObjeto.vida + 20;
                this.sp -=40;
                console.info(this.nombre+" ha dado +20 puntos de vida a "+ jugadorObjeto.nombre);
            }else{
                console.info(this.nombre +" no tiene suficiente sp para curar");               
            }
        }else{
            console.error(this.nombre+" no puede curar porque está muerto");
        }
    }

    this.atacar = function(jugadorObjeto){
        if(this.vida>0){
            if(jugadorObjeto.vida>0){
                this.vida -= 10;
                if(jugadorObjeto.vida>=50){            
                    jugadorObjeto.vida -= 50;
                    console.info(this.nombre+" ha quitado 50 puntos de vida a "+ jugadorObjeto.nombre);
                }else{
                    console.info(this.nombre +" ha matado a "+ jugadorObjeto.nombre);
                    jugadorObjeto.vida=0;
                }
                
            }else{
                console.error("El jugador "+ jugadorObjeto.nombre+" ya está muerto");
            }            
        }else{
            console.error(this.nombre+" no puede atacar porque está muerto");
        }
    }

}

var personaje1 = new Personaje("Gandalf",numconfigVida);
var personaje2 = new Personaje("Legolas",numconfigVida);

console.log(personaje1);
console.log(personaje2);


//Gandalf le da vida a legolas +20
personaje1.curar(personaje2);
console.log(personaje2);


//Ahora Gandalf le ataque a legolas -50
personaje1.atacar(personaje2);
console.log(personaje2);

//Gandalf vuelve a atacar a legolas -50
personaje1.atacar(personaje2);
console.log(personaje2);

//Gandalf vuelve a atacar a legolas -50
personaje1.atacar(personaje2);
console.log(personaje2);
console.log(personaje1);


