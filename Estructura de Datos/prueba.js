let ray = [1,3,5,9,7,8,6,15,22]

function girar(vec) {
    for (let i = 0; i < vec.length/2; i++) {
        let temp = vec[i]; 
        vec[i] = vec[vec.length - i - 1]; 
        vec[vec.length - i - 1] = temp; 
    }
}
girar(ray);
console.log(ray);