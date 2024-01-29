let datos = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]

//Diagonal Principal abajo imprime 6,11,12,16,17,18,21,22,23,24
console.log("Diagonal Principal abajo")
for (let i = 1; i < 5; i++) {
    for (let j = 0; j < i; j++) {
        console.log(datos[i][j]);
    }
}
// Diagonal Secundaria abajo imprime 10,15,14,20,19,18,25,24,23,22
console.log("Diagonal Secundaria abajo")
for (let i = 1; i < 5; i++) {
    for (let j = 4; j >= 5- i; j--) {
        console.log(datos[i][j]);
    }
}

//Diagonal Principal arriba imprime 2,3,4,5,8,9,10,14,15,20
console.log("Diagonal Principal arriba")
for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(datos[i][j]);
    }
}