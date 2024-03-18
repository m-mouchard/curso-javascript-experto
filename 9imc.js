
function iniciar(){
    let boton = document.getElementById("Btn1");
    boton.addEventListener("click",clickBton1);
}

function clickBton1(){
    
    let txtpeso = document.getElementById("inputpeso");
    peso = txtpeso.value;
    //pesofloat = parseFloat(peso);

    let txtaltura = document.getElementById("inputaltura");
    altura =txtaltura.value;
    //alturafloat = parseFloat(altura);

    let imc = peso / (altura * altura);
    
    alert("Su IMC es "+ Math.round(imc));
}

window.onload = iniciar();
