class Liebre {
  constructor() {
    this.posicion = 0;
  }
  Dormir() {}
  Saltogrande() {
    this.posicion += 9;
  }
  Resbalongrande() {
    this.posicion -= 12;
  }
  Saltopequeño() {
    this.posicion += 1;
  }
  Resbalonpequeño() {
    this.posicion -= 2;
  }
}
class Tortuga {
  constructor() {
    this.posicion = 0;
  }
  Pasorapido() {
    this.posicion += 3;
  }
  Resbalon() {
    this.posicion -= 6;
  }
  Pasolento() {
    this.posicion += 1;
  }
}

let tortuga = new Tortuga();
let liebre = new Liebre();

while (tortuga.posicion < 100 && liebre.posicion < 100) {
  let random = Math.floor(Math.random() * 100) + 1;
  let random2 = Math.floor(Math.random() * 100) + 1;

  if (random <= 45) {
    tortuga.Pasorapido();
  } else if (random <= 70) {
    tortuga.Resbalon();
  } else {
    tortuga.Pasolento();
  }

  if (random2 <= 20) {
    liebre.Dormir();
  } else if (random2 <= 40) {
    liebre.Saltogrande();
  } else if (random2 <= 50) {
    liebre.Resbalongrande();
  } else if (random2 <= 85) {
    liebre.Saltopequeno();
  } else {
    liebre.Resbalonpequeno();
  }
  console.log("Posición de la tortuga: " + tortuga.posicion + ".");
  console.log("Posición de la liebre: " + liebre.posicion + ".");
}

if (tortuga.posicion >= 100 && liebre.posicion >= 100) {
  
  console.log("Empate.");

} else if (tortuga.posicion < 100) {
  
  console.log("La liebre gana.");

} else {

  console.log("La tortuga gana.");

}
