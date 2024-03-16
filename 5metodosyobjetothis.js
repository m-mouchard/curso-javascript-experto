//El "this" es igual que la ventana de window, nos dice que es lo que hay. 
//Cuando ejecutamos una funcion, las variables definidas dentro de ella, no estan en el objeto global sino únicamente en su "window" local
//Para que puedan ser accesibles al objeto global tenemos que poner el prefijo "this." 
//El prefijo "this" hará que las variables de una cascada hacia arriba estén disponibles


//Utilizando de esta manera el this, aunque definamos una variable con el mismo nombre en el objeto local como nombre="Juan Carlos Marío"
//seguirá imprimiendo el nombre de dentro de la funcion, porque está definido con el this. y por lo tanto está en el objeto global también


//var nombre="Juan Carlos Marío"
var apellido="Diez de Oñate"

var persona = {
    nombre:"María",
    apellido:"Dubon",
    imprimirNombre: function(){
        //console.log(nombre + " " + apellido);
        console.log(this.nombre + " " + this.apellido);
        console.log(this);
    },

    self2:this,

    direccion:{
        pais:"España",
        obtenerPais: function(){
            
            console.log(this);

            var self = this;
            
            var nuevaDireccion = function(nombre=this.nombre){
                //Aquí hay una anomalía y es que este this de dentro de esta función no apunta el this de la cascada anterior sino al
                //windows global. Para corregir esto, definimos la variable típicamente llamada "self" con la que se guarda el valor
                //del this de la cascada anterior para que así no aparezca el "pais" como "undefined". No obstante, no he conseguido que 
                //el nombre también aparezca, he intentado repetir la acción haciendo un self1 al anterior this pero nada. 
                console.log(this);
                console.log(self);
                console.log("El país de "+ nombre + " es "+ self.pais);
                
            }
            nuevaDireccion();

        }
    }
};

//De esta manera también es fácil cambiar valores de variables desde "fuera" como en este caso que cambiamos el apellido
//persona.apellido="Diez de Oñate";
persona.imprimirNombre();
persona.direccion.obtenerPais();



/*
function crearPersona (nombre,edad,calle,numCalle,puerta,codigoPostal,ciudad,pais){
    
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = {
        calle:calle,
        numCalle:numCalle,
        puerta:puerta,
        codigoPostal:codigoPostal,
        ciudad:ciudad,
        pais:pais,
        obtenerDireccion: function obtenerDireccion(){
            console.log("hola");
        }
    }
    
    
    this.saludar = function () {
        console.log("Hola soy "+ nombre + " y vivo en "+ ciudad);
    }

    

}

var p1 = new crearPersona("Juan",67,"Avenida España",266,4,29680,"Estepona","España");
var p2 = new crearPersona("Lourdes",57,"Avenida España",266,4,29680,"Estepona","España");

// p2.direccion.obtenerDireccion();
//console.log(p1.direccion.pais);

*/

