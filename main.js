//calcula el costo de combustible segun los datos ingresados
//Variables Globales
let tipoVehiculo = "c";
let precioComb = 0;
let tipoConsumo = 0;
let consumoPorKilometro = 0;
let distanciaTotal= 0;
let costoViaje = 0;
let correcto= true;
const ruta ="tipoVehiculo.json"
const tipoVehiculos = [ ];

//Selectores--------------------------------------------------------------------------------
const botonCalcular = document.querySelector("#boton-calcular");
const inputPrecio= document.querySelector("#inputPrecio");
const inputNombre= document.querySelector("#inputNombre");
const inputDominio= document.querySelector("#inputDominio");
const inputEmail= document.querySelector("#inputEmail");
const vehiculo = document.getElementsByName('vehiculo');
const manual = document.querySelector("#manual");
const form = document.querySelector("form");
const consumo = document.getElementsByName('consumo');
const inputConsumo = document.querySelector("#inputCons");
const inputDistancia = document.querySelector("#distancia");
const iV= document.querySelector("#iV");
const gastar = document.querySelector("#gastar");
const h3 = document.querySelector("h3");


//objetos------------------------------------------------------------------------------------
class Usuario{// clase constructora o como se llame --------------------------------------------------
    constructor (nombre, dominio, email){
        this.nombre = nombre;
        this.dominio = dominio;
        this.email = email;
    }
}


//Funciones-------------------------------------------------------------------------
const registroUsuarios=()=>{
    const nuevoUsuario = new Usuario(inputNombre.value, inputDominio.value, inputEmail.value);//instancia de objeto--------------
    // usuarios.push(nuevoUsuario);
    const enJSON2 = JSON.stringify(nuevoUsuario);
    sessionStorage.setItem(sessionStorage.length+1, enJSON2);
}

const listarUsuarios=()=>{
    if(sessionStorage.length > 1 ){
        for(let i = 0; i < sessionStorage.length; i++){
            let clave = sessionStorage.key(i);
            let esteUsuario =JSON.parse(sessionStorage.getItem(clave));
            if (esteUsuario.nombre !== undefined){//---- esto es porq live server inyecta datos al sessionStorage
            $(".usuarios").append(`
            <div >
                    <p><b>Usuario:</b> ${esteUsuario.nombre} <b>Patente:</b> ${esteUsuario.dominio} <b>email:</b> ${esteUsuario.email}</p><br>
            </div>`)}
        }
    }
    else{
        $(".usuarios").append(`
            <h2>No hay datos</h2>`);
    }
}

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
        console.log("ingrese consumo valido");
    }
}

const consumoPorKm = ()=>{
    switch(tipoVehiculo){
        case "c":
            consumoPorKilometro = (tipoVehiculos[0][0]).consumo;
            break;
        case "d":
            consumoPorKilometro = (tipoVehiculos[0][1]).consumo;
            break;
        case "f":
            consumoPorKilometro = (tipoVehiculos[0][2]).consumo;
            break;
        case "t":
            consumoPorKilometro = (tipoVehiculos[0][3]).consumo;
            break;
        case "o":
            radioConsumo();
            console.log("elegiste opcion manual");
            break;    
        default:
        console.log("no ingresaste tipo de vehiculo valido");
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
    gastar.innerHTML =`$ ${costoViaje}`;
}

const limpiar = ()=>{
    tipoVehiculo = "c";
    precioComb = 0;
    tipoConsumo = 0;
    consumoPorKilometro = 0;
    distanciaTotal= 0;
    costoViaje = 0;
    correcto = true;
    h3.innerHTML =``;
    gastar.innerHTML = "$.......";
    manual.setAttribute("class","invisible");
    botonCalcular.removeAttribute("disabled");
    console.clear ();
}

const validar = ()=>{
    console.log("iniciaValidar")
    if(inputPrecio.value == "" || inputPrecio.value == NaN || inputPrecio.value <= 0 ){
        console.log("no ingreso precio valido");
        console.log("inputprecio = " + inputPrecio.value);
        correcto= false;
    }
        
    if(inputDistancia.value == "" || inputDistancia.value == NaN || inputDistancia.value <= 0 ){
        console.log("no ingreso distancia valida");
        console.log("inputdistancia = " + inputDistancia.value);
        correcto = false;
    }
        
    if (correcto == false){
        console.log("no paso validacion");
        h3.innerHTML =`Completa todos los campos (solo numeros positivos)`;
    }
}

const guardarLS = ()=>{  //aplico un poco de local storage y JSON---------------------
    let viaje = {precioComb, consumoPorKilometro, distanciaTotal, costoViaje};
    const enJSON = JSON.stringify(viaje);
    localStorage.setItem(`${localStorage.length+1}`, enJSON);
}

const viajesAnteriores =  ()=>{// localStorage y JSON(trae objetos )-------------------------
    if(localStorage.length > 0 ){
        for(let i = 0; i < localStorage.length; i++){
            let clave = localStorage.key(i);
            let viaje =JSON.parse(localStorage.getItem(clave));
                                    //-----------Jquery (crea elementos HTML)-----------------------
            $(".viajes").append(`
            <div >
                    <p class="este"><b>Precio del Combustible:</b> $${viaje.precioComb} <b>Distancia:</b> ${viaje.distanciaTotal}Km. <b>Gasto Estimado:</b> $${viaje.costoViaje}</p><br>
            </div>`);
        }
        animacion(2000)
    }
    else{
        $(".viajes").append(`
            <h2>No hay datos</h2>`);
    }
}

const animacion= (ms)=>{//-----animaciones con jquery----
    $(".viajes").show(ms, ()=>{//1er callback ----- --
        $(".viajes div:nth-child(odd)").css({"background-color":"lightgreen","border-radius": "2%" });
        $(".viajes div:nth-child(even)").css({"background-color":"lightblue","border-radius": "2%" });
        $(`.este`).animate( {opacity:"1"}, ms*2, ()=>{//2do callback--------
            $(".viajes div").css({"margin":"2px","color": "gray" })
        });
    })
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

botonCalcular.addEventListener("click", (evt)=>{
    evt.preventDefault();
    validar();
    console.log("correcto" + correcto);
    if(correcto){
        precioComb= inputPrecio.value;
        consumoPorKm();
        distancia();
        costo();
        guardarLS();
    }
    botonCalcular.setAttribute( "disabled", true) ;
});

document.addEventListener('DOMContentLoaded', function() {//modal----
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

//jQuery (eventos)-----------------------------------------
$(document).ready((function(){
    console.log("jquery activado");
    }));

$("#boton-reset").click((e)=> {
    limpiar();
});

$("#btn-viajes").click((e)=> {
    $(".viajes").empty();
    viajesAnteriores();
});

$("#btn-guardarUsuario").click((e)=> {
    registroUsuarios()
});

$("#btn-listaUsuarios").click((e)=> {
    listarUsuarios()
});


//Fetch API------------------------------------
fetch(ruta)
.then((response)=>response.json())
.then((json)=>tipoVehiculos.push(json));
