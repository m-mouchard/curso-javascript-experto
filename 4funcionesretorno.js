


function obtenerAleatorio (){

    return Math.random();
}

function obtenerNombre(){

    return "Juan";
}

//Funcion booleana: regresa true o false
function esMayor05(){

    if (obtenerAleatorio()>0.5){
        return true;
    } else{
        return false;
    }
}

if (esMayor05()==true){
    console.log("Es mayor a 0,5")
}else{  
    console.log("Es menor a 0,5")
}

//Las funciones tambien pueden devolver objetos

function crearPersona(nombre, apellido){

    //var obj = {}; podriamos definir el objeto y luego hacer return del objeto sin embargo no es necesario esto, se puededevoolver un obj
    //de modo anonimo y ahorramos espacio en la memoria
    return{
        nombre: nombre,
        apellido: apellido
    }

}

var persona = crearPersona("María","De la O");

console.log( persona.nombre, persona.apellido);

//Funciones que regresan funciones

/*
function creaFuncion(){
    return function(){
    console.log("Me crearon!!");
    }
}

var nuevaFuncion = creaFuncion();
nuevaFuncion();
*/

//Ahora metiendole argumentos a la funcion que se retorna

function creaFuncion(){
    return function(nombre){
    console.log("Me creo " + nombre); //"+" para concatenar el string o sino una ","
    return function(){
        console.log("Segunda funcion");
    }
    }
}

var nuevaFuncion = creaFuncion();
var segundaFuncion = nuevaFuncion(persona.nombre);

segundaFuncion();