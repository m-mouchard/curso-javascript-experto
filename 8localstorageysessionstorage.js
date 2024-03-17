//Guardar en local storage y session storage


function guardarLocalstorage(){
    
    let persona = {
        nombre:"Fernando",
        apellido:"Perez",
        edad:31,
        tema:"light",
        direccion:{
            calle:"Avenida España",
            numero:266,
            codigopostal:29680
        }
    }
    
    let nombre = "Pedro";
    
    //La condición fundamental del localstorage es que únicamente puede almacenar strings (cadenas de caracteres)
    localStorage.setItem("datos_persona_simple",nombre);
    //por ello necesitamos una funcion del JSON STRINGIFY. De esta manera podemos guardar objetos grandes en un local storage
    localStorage.setItem("datos_persona", JSON.stringify(persona)); 

}

guardarLocalstorage();

function obtenerLocalstorage(){

    this.nombreJSON = localStorage.getItem("datos_persona");
    //Esto va a recuperar el valor del objeto datos_persona en formato JSON. Pero para obtenerlo en formato que se 
    //pueda utilizar hay que "traducirlo" con la función "JSON.parse"

    let nombre = JSON.parse(nombreJSON);

    //Pero esto también se puede escribir así para que sea una sola linea: 
    this.nombre1 = JSON.parse(localStorage.getItem("datos_persona"));

    console.log(nombre);
    console.log(nombre1);

}

obtenerLocalstorage();

//Al haberle quitado el formato de JSON a la variable "nombre.." que hemos cogido delo local storage
//podemos utilizar sus propiedades normalmente, a diferencia de si no la hubieramos traducido.
//primer console.log sale undefined y el segundo el nombre indicado en el objeto
console.log(nombre1.nombre);
console.log(nombreJSON.direccion);