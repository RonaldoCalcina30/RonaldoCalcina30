function saludar(){
        console.log("hola mundo");
        let a = 10;
        let b = 5;
        let suma = a+b;
        console.log(suma);
        alert("Bienvenidos")
        alert("ola k ace");
}
function multiplicar(){
    let numero1 = 3;
    let numero2= 4;
    let m = numero1*numero2
    alert("producto = "+ m)
}

function cuenta(){
    let total=100;
    let amigos=4;
    let cuota = total/amigos;
    alert("la cuenta es de S/."+total+" entre "+amigos+" amigos se dividira en S/."+cuota+" por persona." )
}
function mayor(){
    let edad=20;
    if (edad>=18){
        alert("Es mayor de Edad")
    } 
}
function buclecito(){
    let i = 0;
    while (i<=14){
        console.log("Iteración: "+ i)
        i++; 
    } 

    for(let j=0;j<=4;j++){
        alert("Alerta de Bucle For: "+j)
    }
}

function cambiarTitulo(){
    let titulo = document.getElementById("titulo");
    titulo.textContent = "Ejemplos JS"
    titulo.style.color ="red";
}
function cambiarMenu(){
    let m1 = document.getElementById("primera");
    m1.textContent = "imagenes"
    let m2 =document.getElementById("segunda");
    m2.textContent="listas"
    let m3 =document.getElementById("tercera");
    m3.textContent = "tablas"
    let m4 =document.getElementById("cuarta");
    m4.textContent =  "JavaScript"
}
function cambiarLogo(){
    let logo = document.getElementById("logo");
    logo.src= "https://logos-world.net/wp-content/uploads/2025/01/Senati-Symbol.png";
}

function sad(){
    let carita = document.getElementById("carita");
    carita.src="https://static.vecteezy.com/system/resources/thumbnails/018/931/547/small_2x/sad-face-of-emoticons-png.png";
}
function happy(){
       let carita = document.getElementById("carita");
    carita.src="https://media.istockphoto.com/id/689364180/es/vector/sonriente-icono-de-emoci%C3%B3n-de-personas-positivas-de-cara-de-dibujos-animados.jpg?s=612x612&w=0&k=20&c=WmsDAjUpqWkPR7eGixUhWjfnC1_jcyEaUiB5h1nEWVc=";

}