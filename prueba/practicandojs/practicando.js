alert(Practicando_js)
function ejemplo01(){
    //entrada
    let precio1=5,
    precio2=1,
    precio3=3;
    let cantidad1=10,
    cantidad2=20,
    cantidad3=10;
    //proceso
    let subtotal= precio1 * cantidad1 + precio2 * cantidad2 + precio3 * cantidad3;

    if (subtotal>=100){
        total = subtotal*0.95;
        alert("usted tiene un descuento por que compro mas de S/. 100");
    }
    else{
        total = subtotal;
    }
    //salida
    alert("El total a pagar es de S/." + total);
}

function perimetro(){
    //entrada
    let lado=10;
    let base=10;
    // proceso
    let area= lado*base;
    let perimetro= 2*(lado+base);
    //salida
    alert("Area=" + area + "m² y el perimetro=" + perimetro + "m");
}

function Nombre(){
    let nombre = prompt("Como te llamas");
    alert("hola, " + nombre);
}

function taxi(){
    //entrada
    let km = prompt("ingrese los kilometros a recorre");
    // proceso
    let total = 10 + (km*3);
    //salida
    alert("recorrido es de "+ km + "km y el monto total a pagar es de S/."+ total);
}

function promedio(){
    alert("Vamos a calcular el pomerdio de un numero de notas");
    //entrada
    let cantidad = prompt("Ingrese cuantas notas se promediara");
    let total=0;
    for(let i=0;i<cantidad;i++){
        a=i+1
        let nota = Number(prompt("Ingrese nota " + a + ":"));
        console.log(nota);
        //proceso
        total= total+nota;
    }
    let prom = total / cantidad;
    alert("El promedio de esas "+cantidad+ " notas es de"+ prom)
}