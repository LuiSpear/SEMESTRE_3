class Nodo{
    constructor(numero){
      this.numero=numero;
      this.siguiente=null;
    }
  }
 
  class ListaSimple{
    constructor(){
      this.primero=null;
    }
    
    agregarOrdernadoD(nuevo){
      //solo escribe codigo de aqui
        if (!this.primero || nuevo.numero >= this.primero.numero) {
            nuevo.siguiente = this.primero;
        } else {
            let actual = this.primero
            while (actual.siguiente && nuevo.numero < actual.siguiente.numero) {
                actual = actual.siguiente
            }
            nuevo.siguiente = actual.siguiente;
            actual.siguiente = nuevo
        }
      //a aqui :)
    }
  }
 lista = new ListaSimple();
 let nuevo = new Nodo(10);
 lista.agregarOrdernadoD(nuevo);
 console.log(lista.primero);


















