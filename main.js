
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
