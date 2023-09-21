
let vec = [0,0,0,0,0,0]
  class Dado {
    lanzarDado (){
         return Math.floor(Math.random() * 6 ) + 1;
    }
}
const dado1 = new Dado();
  
  for (let i = 0; i < 100; i++) {
    let resultado = dado1.lanzarDado();
    if (resultado == 1) {
      vec[0] += 1 
    } else if (resultado == 2) {
      vec[1] += 1
    } else if (resultado == 3) {
      vec[2] += 1
    } else if (resultado == 4) {
      vec[3] += 1
    } else if (resultado == 5) {
      vec[4] += 1
    } else if (resultado == 6) {
      vec[5] += 1
    }
  }
    
  console.log("El 1 cayo " + vec[0] + " veces")
  console.log("El 2 cayo " + vec[1] + " veces")
  console.log("El 3 cayo " + vec[2] + " veces")
  console.log("El 4 cayo " + vec[3] + " veces")
  console.log("El 5 cayo " + vec[4] + " veces")
  console.log("El 6 cayo " + vec[5] + " veces")
  
  
