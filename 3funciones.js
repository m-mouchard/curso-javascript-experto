//funciones de javascript son muy poderosas

//function es una palabra reservada para definir funciones. Despues la primera palabra de la funcion va en minuscula y la segunda 
//mayusculas, esto se llama notacion camelcase de camello y de letra. 
function primeraFuncion (){
    
    var a = 20;

    console.log(a);

}
//esta nomenclatura solo define la funcion pero esto no va a hacer que se imprima nada por pantalla
//no se ponen ";" al final de la funcion y también al igual que con los objetos se les ponen llaves "{}" y dentro se 
//pueden definir variables reservando memoria. 

//Hay que llamar a la funcion de esta manera para que la ejecute con los "()" se invoca. 
primeraFuncion();

//Dentro de una funcion es un nuevo contexto, por lo que si definimos la variable "a" fuera previamente con otro valor
//no va a imprimir ese nuevo valor sino el que ya tiene dentro de la funcion. Sin embargo si eliminamos la variable de dentro y dejamos 
//la de fuera, entonces sacara ese nuevo valor. Este nuevo valor esta en el objeto "global" y es donde mira despues de haber mirado en
//el contexto local de la funcion donde no ha encontrado esa variable. siempre y cuando la hayamos definido antes que la propia funcion


var a=40;

//Esto hace que la variable a que imprime la funcion aparezca como "undefined" porque el codigo javascript primero hace un
//barrido por todo pero sin entrar en la funcion, luego al llamar a la funcion ve que hay una "a" entonces mira en el objeto global
//es decir, todo lo que hay antes de esa funcion y no ve un valor asignado a la variable, por lo que la muestra "undefined"
//Javascript primero barre todo rapidamente y luego ya ejecuta linea por linea

var miFuncion = primeraFuncion;