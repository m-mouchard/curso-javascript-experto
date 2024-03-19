let nombres = ["Manuel","Ana","Pedro","Eduardo","Rubén"];

//alert(nombres[0]); //El índice cero como en c++ es el primer elemento del vector

nombres.push("Rodrigo"); //Push agrega un valor al vector y lo pone en el último lugar
//alert(nombres);

//Bucle para sacar por pantalla cada uno de los nombres del vector/array
/*
for (let i = 0; i < nombres.length; i++) {
    //debugger;
    const nombre = nombres [i];
    //alert(nombre);
}
*/

window.onload = iniciar();

let tarea = [];

function iniciar(){
    let boton = document.getElementById("btnAgregar");
    boton.addEventListener("click",logicaBtn);
}

function logicaBtn(){
    tarea.push(document.getElementById("newTarea").value);
    //console.log(tarea);
    //aquí llamamos a la función mostrarTareas para que las vaya escribiendo en la web, en el párrafor con el id = "lista"
    mostrarTareas();
}

function mostrarTareas(){   
    let listado = document.getElementById("lista") //Cogemos el párrafo con el id = "lista"
    let var1 =[];
    let var2;
    nuevoCodigo = ""; //inicializamos para que no de error al rellenar esta variable en el bucle
    
    //Manera de usar el bucle for para que recorra todo el vector. 
    //La variable "tarea" existe de la función donde esta a su vez se está invocando. 
    for(let x of tarea){
        //nuevoCodigo = nuevoCodigo + x + "<br/>"; //le metemos salto de linea en html. Otra opción 
        nuevoCodigo += x + "<br/>"; //opción más breve
    }
    var1 = JSON.stringify(tarea);
    var2 = localStorage.setItem("Lista Tareas", var1);
    
    listado.innerHTML = nuevoCodigo; //finalmente insertamos nuevo código html en el elementro listado que recogía el parrafo 
    //con el id "lista" y le metemos la variable nuevoCodigo que hemos rellenado en el for con las tareas. 
}




