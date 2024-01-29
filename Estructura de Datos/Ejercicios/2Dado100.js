
let vec = [0,0,0,0,0,0]
  class Dado {
    lanzarDado (){
         return Math.floor(Math.random() * 6 ) + 1;
    }
}
const dado1 = new Dado();
  
  for (let i = 0; i < 100; i++) {
    let resultado = dado1.lanzarDado();
    vec[resultado-1]++;
  }
  for (let i = 0; i < vec.length; i++) {
    console.log (`la cara ${vec[i]}  ${i+1}`)
    
  }
 