let vec = []

for(let i = 0; i < 1000; i++){
    vec[i] = 1
}

for(let i = 2; i < 1000; i++){
    if(vec[i] == 1){
        for(let j = i + 1; j < vec.length; j++){
            if(j % i == 0){
                vec[j] = 0
            }
        }
    }
}

console.log(vec)