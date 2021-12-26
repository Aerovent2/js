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