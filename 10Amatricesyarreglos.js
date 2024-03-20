window.onload = iniciar();
let listaTareas=[];

function iniciar(){
    let btonAgregar = document.getElementById("btnAgregar");
    btonAgregar.addEventListener("click",clickBtonAgregar);
    mostrarTareas();
}


function clickBtonAgregar(){
    //La función getelementbyId me da el objeto, por eso si imprimimos esto por pantalla nos sacaría un [Object HTMLinputElement] en vez del valor.
    // Para que saque el valor habría que llamar a la propiedad "value" de este objeto ".value"
    let txt = document.getElementById("newTarea").value;
    listaTareas.push(txt);
    //localStorage.setItem("Lista de tareas", JSON.stringify(listaTareas));
    //Como listaTareas es un objeto y no podemos guardar estos en el local storage,
    //lo convertimos a string con la función JSON.stringy
    //tareasStorage = localStorage.setItem("Lista de tareas",JSON.stringify(listaTareas));
    localStorage.tareasStorage = JSON.stringify(listaTareas);
    //console.log(JSON.parse(localStorage.tareasStorage));
    mostrarTareas();
}

function mostrarTareas(){
    let para = document.getElementById("lista");
    let htmlString = "";
    
    // Verificar si localStorage.tareasStorage está definido y no es undefined
    if (localStorage.tareasStorage!= undefined) {
        let listaTareas = JSON.parse(localStorage.tareasStorage);
        for (let i = 0; i < listaTareas.length; i++) {
            htmlString += "Tarea " + (i + 1) + ": " + listaTareas[i] + "<br/>";
        }
    } else {
        htmlString = "No hay tareas almacenadas";
    }
    
    //localStorage.setItem("Lista Tareas post bucle",JSON.stringify(htmlString));
    
    //let htmlFinalParse = JSON.stringify(htmlString);
    //htmlFinalParse = localStorage.getItem("Lista de tareas");
    para.innerHTML = htmlString;
}
