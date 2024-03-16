var a = 10;
var b = 20;

console.log("a: ", a);
console.log("b: ", b);

a = 20;

console.log("a: ", a);
console.log("b: ", b);

var c = {
    nombre:"Manuel",
    Edad:29
};

var d = c;

console.log("c: ", c);
console.log("d: ", d);

c.nombre = "Pedro";

console.log("c: ", c);
console.log("d: ", d);

//cuando son objetos que se igualan "d = c" se hacen por referencia. Aunque cambiemos la propiedad de nombre de una variable al cambiarla
//también se ha cambiado en la otra variable. Porque al hacer ese igual javascript entiende que es el mismo espacio de memoria. 
//por eso son afectadas simultáneamente porque ambas apuntan al mismo espacio de memoria. 

d.nombre = "lucia";

console.log("c: ", c);
console.log("d: ", d);


//Notación de punto, tener los valores de un objeto. Si quereemos valor poropiedad nombreo bejto persona hacer persona.nombre
//IMPORTANTE NO USAR ACENTOS NI CARACTERES ESPECIALES AL DEFINIR VARIABLES/PROPIEDADES
var persona={
    nombre:"Juana",
    apellido:"Herrera",
    edad:25,
    direccion:{
        pais:"Costa Rica",
        ciudad:"San José",
        edificio:{
            nombre:"Edificio Principal",
            telefono:34669333777
        }
    }
};

console.log(persona.direccion.pais );

//Por cada nivel jeráriquico es un "."
//Al salir gris en la consola quiere decir que es un string. 

//Agregar nueva propiedad al objeto ya definido

persona.direccion.zipcode = 11101;
console.log(persona.direccion.zipcode );

//Cuando se hace incontrolable esta notacion de punto si queremos meterle mas datos a la direccion

console.log(persona.direccion.edificio.telefono);

//El problema de esto es que es muy largo y podemos hacer algo para resumirlo
//Todos los objetos son pasados por referencia por lo tanto

edificio = persona.direccion.edificio;

edificio.nopiso="8vo piso";

console.log(persona);

//Notacion de corchete. Valores que sabemso que no van a cambiar. Datos de manera dinamica - javascript es dinamico

var campo ="edad";

console.log(persona["direccion"]["pais"]);
//Pero en vez de un string le podemos pasar una variable
console.log(persona[campo]);
console.log(persona.edad2);

