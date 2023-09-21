let cuantas = Number(prompt ("cantidad de veces e"))
let e = 1 
function factorial(num) {
    let fact= 1
    for (let i= 1; i<=num; i++) {
        fact *=i;
    }
    return fact;
}

for (let i= 1 ; i<= cuantas; i++) {
        e += 1/factorial(i)
    
}
console.log(e)


