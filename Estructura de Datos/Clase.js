class Nodo {
  constructor(numero) {
    this.numero = numero;
    this.hizq = null;
    this.hder = null;
  }
}
class ArbolBinario {
  constructor() {
    this.raiz = null;
  }
  agregar(nuevo) {
    if ((this.raiz = null)) this.raiz = nuevo;
    else this._recAgregar(nuevo, this.raiz);
  }
  _recAgregar(nuevo, raizx) {
    if (nuevo.numero < raizx.numero)
      if (raizx.hizq == null) raizx.hizq = nuevo;
      else this._recAgregar(nuevo, raizx.hizq);
    else if (raizx.hder == null) raizx.hder = nuevo;
    else this._recAgregar(nuevo, raizx.hder);
  }

  buscar(numero){
    if (this.raiz = null){
        return null
    } else {
        return this._recBuscar(numero, this.raiz)
    }
  }

  _recBuscar(numero, raizx){
    if (numero = raizx.numero) {
        return raizx
    } else {
        
    }
  }
}

let arbol = new ArbolBinario()