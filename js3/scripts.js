funciones
function perimetro(){
    //entrada
    let lado=Number(prompt("Ingrese la medida de la lado"));
    let base=Number(prompt("Ingrese la medida de la base"));
    // proceso
    let area= lado*base;
    let perimetro= 2*(lado+base);
    //salida
    alert("Area=" + area + "m² y el perimetro=" + perimetro + "m");
}

function dolares(){
    //entrada
    let dolar=Number(prompt("cuanto desea cambiar"));
    
    //Proceso
    let soles=Number(3.46);
    let cambio=(dolar*soles);
    //salida
    alert("$"+dolar+" dolar equivale a S/."+cambio+" soles")
}

function cambiarLogo(){
    let goku = document.getElementById("goku");
    goku.src= "imagenes/GOKU2.jpg";
}

function cambiarTexto(){
    let texto=document.getElementById("texto").textContent="Jiren, el poderoso guerrero gris, busca justicia absoluta siempre."
}