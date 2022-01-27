
// Heffel Leonardo
// pedacitos de codigo y anotaciones
//DOM
const h1 = document.querySelector("#id")
const p = document.querySelectorAll(".class")

const th = document.getElementsByTagName("th");
const titulos = ["Nombre", "Pais", "Fruver", "Color", "Comida"];
let i =0;
for (let cadaTh of th){
    cadaTh.innerHTML = titulos[i];
    cadaTh.setAttribute("class", "cambiarverde");
    cadaTh.setAttribute("id", `saludo${i}`);
    i++;
} 
const letraA = ["Ana", "Australia", "Anana", "Azul", "Arroz"];
const letraM = ["Maria", "Mexico", "Manzana", "Morado", "Mocos"];
const letraL = ["Lucia", "Luxemburgo", "Lima", "Lila", "Lomito"]
const td = document.getElementsByTagName("td");

// for(let index= 0; i < 5; i++){
//     td[index].innerHTML = letraA[index];
//     i++;
// }
function popularTabla(desde, hasta, arregloLetra){
    let contador = 0;
    for(let i = desde; i < hasta; i++){
        td[i].innerHTML = arregloLetra[contador]
        contador++;
    }
}
popularTabla(0,5,letraA);
popularTabla(5,10,letraM);
popularTabla(10,15,letraL)

/*Crear elementos en el htmal*/
const div = document.createElement("div")
const ul = document.createElement("ul")
const li = document.createElement("li")

ul.appendChild(li);
div.appendChild(ul);
document.body.appendChild(div);

div.removeChild(ul);
/*------------------------------------------------*/
const colores = ["Azul", "Marron", "Gris", "Violeta","Azul", "Marron", "Gris", "Violeta","Rojo"]
for(let i= 0; i<10; i++){
let li = document.createElement("li")//crear li
li.innerHTML = colores[i]// agregar datos array
li.setAttribute("class","coloresLi")
ul.appendChild(li);//asignar el padre
}

//tomar datos de un input
let input = document.createElement("input")
document.body.appendChild(input);
input.value = 42; //asigna valor
console.log(input.value);//busca valor y lo muestra por consola

//cadenas con variables
let cadena = "esto es una cadena";
`lo que voy  a decir es ${cadena}`
'lo que voy a decir es '+ cadena



/*-----------------------------------------------------------------------------*/
//innerHTML + plantillas literales
const rol = [
    {clase: "Guerrero", arma:"Gran Espada", poder:"Arremetida"},
    {clase: "Mago", arma:"Baculo", poder:"Bola de fuego"},
    {clase: "Healer", arma:"Baston", poder:"Curar a los aliados"},
];

for(let personajes of rol){
    //crear elemento para almacenar en el html
    let div = document.createElement("div");
    //tenemos que insertar los datos del personaje
    div.innerHTML = `<p>Clase: ${personajes.clase}</p>
                    <p>Arma: ${personajes.arma}</p>
                    <p>Poder: ${personajes.poder}</p>`;
    //agregar al body el elemento que creamos
    document.body.appendChild(div);
}
/*-----------------------------------------------------------------------------*/

// a partir de acá es para cumplir los desafios------------------------------------------

let mostrar = tipoVehiculos.find((auto) => auto.consumo >= 0.08)// busca el primero con consumo mayor o igual a 

console.log(mostrar)

mostrar = tipoVehiculos.filter((auto) => auto.tipo != "compacto") // fltra todos los que no sean compacto

console.log(mostrar)

const ventanillasBajas = tipoVehiculos.map((auto) => {// suma un 10 porciento de consumo
    auto.consumo = auto.consumo * 1.10;
    return auto
});
console.log(ventanillasBajas)


tipoVehiculos.sort((a,b) => {
    if(a.consumo > b.consumo) {
        return 1;
    }
    if (a.consumo < b.consumo){
        return -1;
    }
    return 0;
});
console.log("ordena los objetos del array por consumo")
console.log(tipoVehiculos);

//calcula que dias son habiles segun la cantidad de dias del mes y en que dia comienza el mes
let cantidadDias = parseInt(prompt("Cuantos dias tiene el mes"));
let primerDia;
let dato1=false;
let dato2=false;

if (cantidadDias != null && cantidadDias >= 28 && cantidadDias<=31 ){
    primerDia = prompt("cual es el primer dia del mes");
    dato1=true;
    }
else{
    alert("Ingrese un Numero ente 28 y 31");

}

if (primerDia != null ){
    primerDia = primerDia.toLowerCase();
    dato2=true;
    }
else{
    alert("ingrese un dia válido (Lunes, Jueves, etc)");

}
if (dato1&&dato2){
    let lun = 0
    let mar = 1
    let mie = 2
    let jue = 3
    let vie = 4
    let sab = 5
    let dom = 6
    let dia = "dia"
    switch(primerDia){
        case "lunes":
            lun = 0;
            mar = 1;
            mie = 2;
            jue = 3;
            vie = 4;
            sab = 5;
            dom = 6;
            break;
        case "martes":
            lun = 6;
            mar = 0;
            mie = 1;
            jue = 2;
            vie = 3;
            sab = 4;
            dom = 5;
            break;
        case "miercoles":
            lun = 5;
            mar = 6;
            mie = 0;
            jue = 1;
            vie = 2;
            sab = 3;
            dom = 4;
            break;        
        case "jueves":
            lun = 4;
            mar = 5;
            mie = 6;
            jue = 0;
            vie = 1;
            sab = 2;
            dom = 3;
            break;
        case "viernes":
            lun = 3;
            mar = 4;
            mie = 5;
            jue = 6;
            vie = 0;
            sab = 1;
            dom = 2;
            break;
        case "sabado":
            lun = 2;
            mar = 3;
            mie = 4;
            jue = 5;
            vie = 6;
            sab = 0;
            dom = 1;
            break;
        case "domingo":
            lun = 1;
            mar = 2;
            mie = 3;
            jue = 4;
            vie = 5;
            sab = 6;
            dom = 0;
            break;
        default:
        alert("Supongamos que dijiste Lunes");
    }


    for (let i=1; i <= cantidadDias; i++){
        if (i == 1){
            lun = lun + 1;
            mar = mar + 1;
            mie = mie + 1;
            jue = jue + 1;
            vie = vie + 1;
            sab = sab + 1;
            dom = dom + 1;
            
        }
        else if (i == 7 ){
            lun = lun + 7;
            mar = mar + 7;
            mie = mie + 7;
            jue = jue + 7;
            vie = vie + 7;
            sab = sab + 7;
            dom = dom + 7;
            
        }
        else if (i == 14 ){
            lun = lun + 7;
            mar = mar + 7;
            mie = mie + 7;
            jue = jue + 7;
            vie = vie + 7;
            sab = sab + 7;
            dom = dom + 7;
            
        }
        else if (i == 21 ){
            lun = lun + 7;
            mar = mar + 7;
            mie = mie + 7;
            jue = jue + 7;
            vie = vie + 7;
            sab = sab + 7;
            dom = dom + 7;
            
        }
        else if (i == 28 ){
            lun = lun + 7;
            mar = mar + 7;
            mie = mie + 7;
            jue = jue + 7;
            vie = vie + 7;
            sab = sab + 7;
            dom = dom + 7;
            
        }
        if (lun == i){
            dia = "Lunes";
        }
        if (mar == i){
            dia = "Martes";
        }
        if (mie == i){
            dia = "Miercoles";
        }
        if (jue == i){
            dia = "Jueves";
        }
        if (vie == i){
            dia = "Viernes";
        }

        if (i == sab || i == dom){
            console.log("Fin de Semana")
            continue;
        }
        console.log(`${dia} ${i} habil`)

    }
}


//devuelve la decada en que naciste

let edad = prompt("ingrese su edad")
let anioActual= 2021
let anioNac= (anioActual - edad)
console.log(anioNac)
if (anioNac <= 1929 ){
    console.log("Bienvenida Mirtha")
}
else if (anioNac <= 1939 && anioNac >=1930){
    console.log("sos de los 30s")
}
else if (anioNac <= 1949 && anioNac >=1940){
    console.log("sos de los 40s")
}
else if (anioNac <= 1959 && anioNac >=1950){
    console.log("sos de los 50s")
}
else if (anioNac <= 1969 && anioNac >=1960){
    console.log("sos de los 60s")
}
else if (anioNac <= 1979 && anioNac >=1970){
    console.log("sos de los 70s")
}
else if (anioNac <= 1989 && anioNac >=1980){
    console.log("sos de los 80s")
}
else if (anioNac <= 1999 && anioNac >=1990){
    console.log("sos de los 90s")
}
else if (anioNac <= 2009 && anioNac >=2000){
    console.log("sos de los 00s")
} 
else if (anioNac <= 2019 && anioNac >=2010){
    console.log("sos de los 10s")
}
else if (anioNac >=2020){
    console.log("mmmmm")
}
else {
    console.log("ingrese un dato valido")
};




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



alert(`${mensajeNavidenio} ${nombre}`)

let entrada = prompt('ingresar una letra');
let salida = entrada + " " + "ingresada";
alert(salida);