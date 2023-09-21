
let sueldo = Number(prompt ("Ingresa el sueldo"));

if (sueldo <= 1000) {
    sueldo = sueldo + (sueldo * 0.18)
    console.log(sueldo)
} else if (sueldo <= 1200) {
    sueldo = sueldo + (sueldo * 0.15)
    console.log(sueldo)
} else if (sueldo <= 1450) {
    sueldo = sueldo + (sueldo * 0.12)
    console.log(sueldo)
} else if(sueldo <= 1600 ) {
    sueldo = sueldo + (sueldo * 0.10)
    console.log(sueldo)
} else {
    sueldo = sueldo + (sueldo * 0.08)
    console.log(sueldo)
}