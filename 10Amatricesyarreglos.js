let listaTareas=[];

window.onload = iniciar();

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
    mostrarTareas();
}

function mostrarTareas(){
    let para = document.getElementById("lista");
    let htmlString = "";
    
    for (let i = 0; i < listaTareas.length; i++) {
        const element = listaTareas[i];
        htmlString += "Tarea "+ (i+1)+": " +listaTareas[i]+"<br/>";
        debugger;
    }
    
    htmlString = htmlString;

    //localStorage.setItem("Lista Tareas post bucle",JSON.stringify(htmlString));
    
    //let htmlFinalParse = JSON.stringify(htmlString);
    //htmlFinalParse = localStorage.getItem("Lista de tareas");
    para.innerHTML = htmlString;
}
