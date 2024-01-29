class Proceso {
  constructor(ciclos) {
    this.ciclos = ciclos;
    this.siguiente = null;
    this.anterior = null;
  }
}
class ListaCircular {
  constructor() {
    this.primero = null;
  }

  agregar(nuevo) {
    if (this.primero == null) {
      this.primero = nuevo;
      nuevo.siguiente = nuevo;
      nuevo.anterior = nuevo;
    } else {
        nuevo.siguiente = this.primero;
        nuevo.anterior = this.primero.anterior;
        this.primero.anterior.siguiente=nuevo;
        this.primero.anterior=nuevo;
    //   const ultimo = this.primero.anterior;
    //   nuevo.siguiente = this.primero;
    //   nuevo.anterior = ultimo;
    //   this.primero.anterior = nuevo;
    //   ultimo.siguiente = nuevo;
    }
  }

  extraerprimero() {
    if (this.primero === null) {
      return null;
    } else {
      const nuevo = this.primero;
      if (this.primero.siguiente === this.primero) {
        this.primero = null;
      } else {
        const siguiente = this.primero.siguiente;
        const anterior = this.primero.anterior;
        siguiente.anterior = anterior;
        anterior.siguiente = siguiente;
        this.primero = siguiente;
      }

      return nuevo;
    }
  }
}


const lista = new ListaCircular();

lista.agregar(new Proceso(1));
lista.agregar(new Proceso(2));
lista.agregar(new Proceso(3));

const procesoExtraido = lista.extraerprimero();
console.log("Proceso extraído con ciclos:", procesoExtraido.ciclos);
