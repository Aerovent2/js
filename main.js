
//calcula el costo de combustible segun los datos ingresados

let kilometrosPorLitro;
let consumoCadaCien;
let consumoPorKilometro;
let distanciaTotal;
let correcto= true;
let distanciaParcial;
let precioCombustible;
let idaYvuelta;

function ingresoDatos (){  // 1ra Funcion----------------------------------------------------------------------------
    precioCombustible =  parseInt(prompt("Ingrese el precio por litro"));
    medicion = parseInt(prompt("como desea ingresar el consumo? solo números \n 1-(km/l) \n 2-(l/100km)"));
    distanciaParcial = parseInt(prompt("ingrese la distancia en kilometros"));
    idaYvuelta = prompt("viaja ida y vuelta (S/N)");

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
    idaYvuelta = idaYvuelta.toLocaleLowerCase(); 


    if (idaYvuelta != "s" && idaYvuelta != "n"){
        correcto=false
        alert("No ingreso un dato ida/vuelta valido");
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

const costo = (precio, consumo, distancia) => {// 3ra funcion ------------------------------------------------
    return precio * (consumo * distancia);
}

ingresoDatos();

if (correcto){
    proceso()
    alert("Vas a gastar $"+ Math.round(costo(precioCombustible,consumoPorKilometro,distanciaTotal)));

}
else {
    console.log("ingresaste algo mal")
}

