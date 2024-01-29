let vec = [7,2,14,15,8,24,27,5,22,12,4,1,9,29,16]

console.log(vec)
let comparaciones = 0
function Burbuja(vec) {
    comparaciones ++;
    for (let nc = vec.length -1; nc > 0; nc--) {
        for (let i = 0; i < vec.length; i++) {
            if (vec[i] > vec[i+1]) {
                let aux = vec[i]
                vec[i] = vec[i+1]
                vec[i+1] = aux
            }
            
        }
    }  
    return vec;
}

console.log(Burbuja(vec));
console.log("Numero de comparaciones realizadas : " + ${'comparaciones'})