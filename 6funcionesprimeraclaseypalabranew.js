//La palabra new consigue crear un nuevo objeto basado en la funcion/clase que hemos definido previamente
//notese que esta funcion/clase le ponemos a drede la primera letra en mayúscula para destacar que
//es una clase. 

//Para entender mejor el funcionamiento de la palabra "this" ver el archivo "5..."
function Persona(nombre,apellido,edad){

    //estos son propiedades, características por ejempo de un robot, color rojo, etc
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    //esto es un método (una función que queremos que haga nuestro robot; ir a la izquierda por ej)
    this.nombreCompleto = function (nombre=this.nombre, apellido=this.apellido){
        return (nombre + " " + apellido + " (" + edad + ")");
    }

}

var juan = new Persona("Juan","Mendoza",35); //Esto crea un objeto vacio de tipo "Persona" por meterle la palabra "new". Sin "new", solo estaríamos ejecutando la función Persona()
//como cualquier otra función. Pero cuando agregamos "new" delante, indica que queremos crear un nuevo objeto utilizando esas instrucciones de la función Persona().

//console.log(juan);
//console.log(juan.nombre);
console.log(juan.nombreCompleto());



function Persona2(){
    this.nombre = "Pedro";
    this.apellido = "Mascapiedras";
    this.edad = 29;

    this.nombreCompleto2 = function (){
        return (this.nombre+" "+this.apellido+" ("+this.edad+")");
    }
}

p1 = new Persona2();

console.log(p1.nombreCompleto2());