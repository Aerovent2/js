# js 
Heffel Leonardo
pedacitos de codigo y anotaciones


//revisa si es primo
let numero = parseInt(prompt("Ingrese un Numero"));

let divisores = 0;


for(contador=1;contador <= numero; contador= contador + 1){// busque el ciclo for en internet porq do while no me funcionaba :)
    if(numero%contador == 0){
        divisores = divisores +1
    }
    console.log(contador+"conta")
    console.log(numero+"num")
    console.log(divisores+"divi" )
}

if (divisores > 2){
    console.log( "el numero no es primo")
}
else {
    console.log("puede ser")
    if (numero != 1){
        console.log("el numero es primo")
    }
}


//siempre console log para ver que hace
//poner else para error de datos

//numero par
let numero = Number(prompt("ingrese un numero"))

if (numero%2 == 0){
    console.log("elnumero es par")
}
else {
    console.log("el numero no es par")
}

//un semaforo
let luz = prompt("que luz tiene el semaforo").toLowerCase()
if (luz == "verde"){
    console.log ("podemos avanzar")
}
else if (luz == "amarillo"){
    console.log ("avanzar con precaucion")
}
else if (luz == "rojo"){
    console.log ("no se puede avanzar")
}
else {
    console.log ("el semaforo esta roto")
}


let horasExtras = true;
if (horasExtras){
    console.log("este mes gano de mas")
}
else{
    console.log("me pagan lo mismo de siempre")
}


//las constantes no se pueden pisar
const numero =20;

var fruta ='pera';

let nombre = prompt('Decime tu nombre');

let mensajeNavidenio ='Feliz Navidad';

console.log(nombre + 'se la va a dar en la ' + fruta + ' en navidad');

console.log(`${fruta} es muy rica y le gusta a ${nombre}`);

alert(mensajeNavidenio + '' nombre)

alert(`${mensajeNavidenio} ${nombre}`)

let entrada = prompt('ingresar una letra');
let salida = entrada + " " + "ingresada";
alert(salida);