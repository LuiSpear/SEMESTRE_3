class Punto {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    Formato() {
        return `(${this.x},${this.y})`;
    }

    calcDistancia(){

    }


}
let punto1 = new Punto(3,7)
let punto2 = new Punto(4,5)
console.log(punto1)
console.log(punto2)
