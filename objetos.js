class Viaje{// clase constructora o como se llame --------------------------------------------------
    constructor (distancia, consumo, precio){
        this.distancia = distancia;
        this.consumo = consumo;
        this.precio = precio;
    }
    viajar(){//metodo------------------------------------------------------
        console.warn(this.precio, this.consumo, this.distancia)
        return this.precio * (this.consumo * this.distancia)
    }
}

class Vehiculo{
    constructor (tipo, consumo){
        this.tipo = tipo;
        this.consumo = consumo;
    }
}