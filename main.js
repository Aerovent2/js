
//calcula el costo de combustible segun los datos ingresados

let kilometrosPorLitro;
let consumoCadaCien;
let consumoPorKilometro;
let distanciaTotal;
let correcto= true;
let distanciaParcial;
let precioCombustible;
let idaYvuelta;
let tipoIngreso;
let tipoVehiculo;

const vehiculoC = new Vehiculo("compacto",0.06);
const vehiculoD = new Vehiculo("deportivo",0.1);
const vehiculoF = new Vehiculo("familiar",0.075);
const vehiculoT= new Vehiculo("todoterreno",0.09);

const tipoVehiculos = [ ];// creo el array----------------------------------------
tipoVehiculos.push(vehiculoC,vehiculoD,vehiculoF,vehiculoT); // pusheo los elementos---------------------


function ingresoDatos (){  // 1ra Funcion----------------------------------------------------------------------------
    precioCombustible =  parseInt(prompt("Ingrese el precio por litro"));
    tipoIngreso= parseInt(prompt("como desea ingresar el consumo? solo números \n 1-(aproximado) \n 2-(manual)"));
    
    if(tipoIngreso == 1){
        tipoVehiculo = prompt("Elija su vehiculo \n 1-(Compacto) \n 2-(Deportivo) \n 3-(Familiar) \n 4-(Todoterreno)")
        switch(tipoVehiculo){
            case "1":
               consumoPorKilometro = (tipoVehiculos[0]).consumo;
                break;
            case "2":
                consumoPorKilometro = (tipoVehiculos[1]).consumo;
                break;
            case "3":
                consumoPorKilometro = (tipoVehiculos[2]).consumo;
                break;
            case "4":
                consumoPorKilometro = (tipoVehiculos[3]).consumo;
                break;
            default:
            correcto = false;
            alert("no ingresaste tipo de vehiculo valido");
        }
    }
    else if (tipoIngreso == 2){
            medicion = parseInt(prompt("como desea ingresar el consumo? solo números \n 1-(km/l) \n 2-(l/100km)"));
            if(medicion == "1"){
                kilometrosPorLitro= parseInt(prompt("ingrese rendimiento por litro"));
                consumoPorKilometro =  1/kilometrosPorLitro;
            }
            else if(medicion == "2"){
                consumoCadaCien = parseInt(prompt("ingrese el consumo cada 100 kilometros (l/100)"));
                consumoPorKilometro = consumoCadaCien/100;
            }
                else{
                    correcto = false;
                    alert("No ingreso medicion valida");
                }
        }
    else{
        correcto = false;
    }
    
    distanciaParcial = parseInt(prompt("ingrese la distancia en kilometros"));
    idaYvuelta = prompt("viaja ida y vuelta (S/N)");

    idaYvuelta = idaYvuelta.toLowerCase(); 


    if (idaYvuelta != "s" && idaYvuelta != "n"){
        correcto=false
        alert("No ingreso un dato ida/vuelta valido");
    } 
    if (isNaN(precioCombustible)){
        correcto = false;
        alert("ingrese bien el precio")
    }
    if (isNaN(distanciaParcial)){
        correcto = false;
        alert("ingrese bien la distancia")
    }
}

function proceso (){ //2da Funcion ----------------------------------------------------------------------
    switch(idaYvuelta){
        case "s":
            distanciaTotal = distanciaParcial *2;
            break;
        case "n":
            distanciaTotal = distanciaParcial;
            break;
        default:
            distanciaTotal = distanciaParcial;
            console.log("no deberias estar viendo esto");
        }
}


//ingresoDatos();
//console.log(precioCombustible, consumoPorKilometro, distanciaTotal)

// if (correcto){
//     proceso();
//     const viaje1 = new Viaje(distanciaTotal, consumoPorKilometro, precioCombustible);//instancia de objeto--------------
//     alert("Vas a gastar $"+ Math.round(viaje1.viajar()));//llama al metodo------------------------
// }
// else {
//     console.log("ingresaste algo mal")
// }

//a partir de acá es para cumplir los desafios------------------------------------------

// let mostrar = tipoVehiculos.find((auto) => auto.consumo >= 0.08)// busca el primero con consumo mayor o igual a 

// console.log(mostrar)

// mostrar = tipoVehiculos.filter((auto) => auto.tipo != "compacto") // fltra todos los que no sean compacto

// console.log(mostrar)

// const ventanillasBajas = tipoVehiculos.map((auto) => {// suma un 10 porciento de consumo
//     auto.consumo = auto.consumo * 1.10;
//     return auto
// });
// console.log(ventanillasBajas)


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