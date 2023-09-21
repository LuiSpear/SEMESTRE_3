class Dado {
    lanzar (){
         return Math.floor(Math.random() * 6 ) + 1;
    }
}

const dado1 = new Dado()

for (let i= 1; i <= 10; i++) {
    console.log(dado1.lanzar()); 
}

