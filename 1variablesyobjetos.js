/*Las variables son dinámicas, se pueden definir a lo largo del código en diferentes
tipos de variables (boleana, string, num, undefined y null*/

//así se definen variables, var nombre-variables=valor;
var a=1;
var b="Manuel";

//el "var" reserva espacio de memoria, pero esto no es necesario hacerlo para cuando 
//definimos propiedades (variables) dentro de los objetos

//Así se definen objetos (como variables pero mentiendo el valor entre llaves
//dentro de los objetos se le definen las PROPIEDADES con ":" y una coma después
//si queremos introducir más propiedades (excepto la última propiedad)
//una de estas propiedades puede ser a su vez un objeto pero este se define con ":"
//no con un símbolo "="
var obj={
    numero:10,
    nombre:"Manuel",
    objHijo:{
        numero:20,
        nombre:"pedro"
    }
};

console.log(obj);


//estos son los tipos de datos que podemos meter en javascript 1) Primitivos var a=1; y 2)Objetos