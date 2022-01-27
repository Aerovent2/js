
//calcula el costo de combustible segun los datos ingresados
//Variables Globales
let tipoVehiculo = "a";
let precioComb = 0;
let tipoConsumo = 0;
let consumoPorKilometro = 0;
let distanciaTotal= 0;
let costoViaje = 0;
let correcto= true;

//Objetos
const vehiculoC = new Vehiculo("compacto",0.06);
const vehiculoD = new Vehiculo("deportivo",0.1);
const vehiculoF = new Vehiculo("familiar",0.075);
const vehiculoT= new Vehiculo("todoterreno",0.09);

const tipoVehiculos = [ ];
tipoVehiculos.push(vehiculoC,vehiculoD,vehiculoF,vehiculoT); 


//Selectores--------------------------------------------------------------------------------
const botonClick = document.querySelector("#boton-click");
const inputPrecio= document.querySelector("#inputPrecio");
const vehiculo = document.getElementsByName('vehiculo');
const manual = document.querySelector("#manual");
const form = document.querySelector("form");
const consumo = document.getElementsByName('consumo');
const inputConsumo = document.querySelector("#inputCons");
const inputDistancia = document.querySelector("#distancia")
const iV= document.querySelector("#iV")
const h3 = document.querySelector("h3")
const botonReset = document.querySelector("#boton-reset")

//Funciones-------------------------------------------------------------------------
const radioVehiculo = ()=>{
    for(i=0; i<vehiculo.length; i++){

        if(vehiculo[i].checked){

        tipoVehiculo=vehiculo[i].value;
        }
    }
}

const radioConsumo = ()=>{
    for(i=0; i<consumo.length; i++){

        if(consumo[i].checked){

        tipoConsumo=consumo[i].value;
        }
    }
    if (tipoConsumo == 1){
        consumoPorKilometro = 1/inputConsumo.value;
    }
    else if (tipoConsumo == 2){
        consumoPorKilometro = inputConsumo.value/100;
    }
    else {
        alert("ingrese consumo valido");
    }
}

const consumoPorKm = ()=>{
    switch(tipoVehiculo){
        case "c":
            consumoPorKilometro = (tipoVehiculos[0]).consumo;
            break;
        case "d":
            consumoPorKilometro = (tipoVehiculos[1]).consumo;
            break;
        case "f":
            consumoPorKilometro = (tipoVehiculos[2]).consumo;
            break;
        case "t":
            consumoPorKilometro = (tipoVehiculos[3]).consumo;
            break;
        case "o":
            radioConsumo()
            console.log("elegiste opcion manual");
            break;    
        default:
        alert("no ingresaste tipo de vehiculo valido");
    }
}
const distancia =()=>{
    if(iV.checked){
        distanciaTotal = inputDistancia.value*2;
    }
    else{
        distanciaTotal= inputDistancia.value;
    }
}

const costo = ()=>{
    costoViaje= Math.round(precioComb *(distanciaTotal * consumoPorKilometro ));
    h3.innerHTML = costoViaje;
}
const limpiar = ()=>{
    tipoVehiculo = "a";
    precioComb = 0;
    tipoConsumo = 0;
    consumoPorKilometro = 0;
    distanciaTotal= 0;
    costoViaje = 0;
}

const validar = ()=>{
    console.log("iniciaValidar")
    if(inputPrecio.value == "" || inputPrecio.value == NaN){
        alert("ingrese precio valido");
        console.log("inputprecio = " + inputPrecio.value);
        correcto= false;
    }
        
    if(inputDistancia.value == "" || inputDistancia.value == NaN){
        alert("ingrese distancia valida");
        console.log("inputdistancia = " + inputDistancia.value);
        correcto = false;
    }
    
    if(tipoVehiculo == "a" || tipoVehiculo == null){
        alert("elija el tipo de vehiculo");
        console.log("tipovehiculo = " + tipoVehiculo)
        correcto = false;
    }
    
    if (correcto == false){
        console.log("no paso validacion");
    }
}
//eventos--------------------------------------------------------
form.addEventListener("change", ()=>{
    radioVehiculo();
    if (tipoVehiculo == "o"){
        manual.removeAttribute("class","invisible");
    }
    else{
        manual.setAttribute("class","invisible");
    }
})

botonClick.addEventListener("click", (evt)=>{
    evt.preventDefault();
    validar()
    console.log("correcto" + correcto);
    if(correcto){
        precioComb= inputPrecio.value;
        consumoPorKm();
        distancia();
        costo();
    }
})

botonReset.addEventListener("click", ()=>{
    limpiar();
    h3.innerHTML = "";
})