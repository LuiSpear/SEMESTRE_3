let suma = 0;
let cuantos = Number(prompt ("¿Cuantas veces?"));
let div = 1;
for (let i = 0; i< cuantos; i++, div+=2) {
    if(i % 2 == 1 ){
        suma -= 4/(div)
    } else {
        suma += 4/(div)
    }
    
}
console.log(suma)