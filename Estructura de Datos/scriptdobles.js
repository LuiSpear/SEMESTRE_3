class Inventario {
  constructor() {
    this.primero = null;
  }
  Agregar(nuevo) {
    if (this.primero == null) {
      this.primero = nuevo;
    } else if (nuevo.codigo < this.primero.codigo) {
      this.primero.anterior = nuevo;
      nuevo.siguiente = this.primero;
      this.primero = nuevo;
    } else if (this.primero.siguiente == null) {
      this.primero.siguiente = nuevo;
      nuevo.anterior = this.primero;
    } else {
      let posicion = this.primero;
      while (
        posicion.siguiente != null &&
        nuevo.codigo > posicion.siguiente.codigo
      ) {
        posicion = posicion.siguiente;
      }
      nuevo.anterior = posicion;
      nuevo.siguiente = posicion.siguiente;
      posicion.siguiente = nuevo;
    }
    return nuevo;
  }
  Eliminar(codigo) {
    if (this.primero == null) {
      return null;
    } else if (this.primero.codigo == codigo) {
      let temp = this.primero;
      if (this.primero.siguiente == null) {
        this.primero = null;
      } else {
        this.primero.siguiente.anterior = null;
        this.primero = this.primero.siguiente;
      }
      return temp.Lista();
    } else {
      let posicion = this.primero;
      while (
        posicion.siguiente != null &&
        posicion.siguiente.codigo != codigo
      ) {
        posicion = posicion.siguiente;
      }
      if (posicion.siguiente != null) {
        if (posicion.siguiente.siguiente != null) {
          posicion.siguiente.siguiente.anterior = posicion;
        }
        let temp = posicion.siguiente;
        posicion.siguiente = posicion.siguiente.siguiente;
        return temp.Lista();
      } else {
        return null;
      }
    }
  }
  Buscar(codigo) {
    if (this.primero == null) {
      return null;
    } else {
      let posicion = this.primero;
      while (posicion.siguiente != null && posicion.codigo != codigo) {
        posicion = posicion.siguiente;
      }
      if (posicion.codigo == codigo) {
        return posicion.Lista();
      } else {
        return null;
      }
    }
  }
  Listar() {
    if (this.primero == null) {
      return null;
    } else {
      let posicion = this.primero;
      let lista = posicion.Lista();
      posicion = posicion.siguiente;
      while (posicion != null) {
        lista += posicion.Lista();
        posicion = posicion.siguiente;
      }
      return lista;
    }
  }
  ListarInverso() {
    if (this.primero == null) {
      return null;
    } else {
      let posicion = this.primero;
      let lista = posicion.Lista();
      posicion = posicion.siguiente;
      while (posicion != null) {
        lista = posicion.Lista() + lista;
        posicion = posicion.siguiente;
      }
      return lista;
    }
  }
}
let inventario = new Inventario();
class Producto {
  constructor(codigo, nombre, cantidad, costo) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.costo = "$" + costo;
    this.siguiente = null;
    this.anterior = null;
  }
  Lista() {
    return (
      "Código: " +
      this.codigo +
      ". Nombre: " +
      this.nombre +
      ". Cantidad: " +
      this.cantidad +
      ". Costo: " +
      this.costo +
      "<br>"
    );
  }
}

const btnAdd = document.getElementById("agregar");
const btnBusq = document.getElementById("buscar");
const btnEliminar = document.getElementById("eliminar");
const btnList = document.getElementById("listar");
const btnList2= document.getElementById("listar2");

const codigo = document.getElementById("codigo");
const nombre = document.getElementById("nombre");
const cantidad = document.getElementById("cantidad");
const costo = document.getElementById("costo");

btnAdd.addEventListener("click", () => {
  let codigo2 = Number(codigo.value);
  let nombre2 = codigo.value;
  inventario.agregar(
    new Producto(codigo2, nombre2, cantidad.value, costo.value)
  );
  detalles.innerHTML += `<div>Agregado: "${nombre2}" con código: ${codigo2}</div>`;
});
btnBusq.addEventListener("click", () => {
  let codigo2 = Number(codigo.value);
  inventarioHTML.innerHTML = inventario.buscar(codigo2);
  detalles.innerHTML += `<div>Buscado código: ${codigo2}</div>`;
});
btnEliminar.addEventListener("click", () => {
  let codigo2 = Number(codigo.value);
  inventarioHTML.innerHTML = inventario.eliminar(codigo2);
  detalles.innerHTML += `<div>Eliminado código: ${codigo2}</div>`;
});
btnList.addEventListener("click", () => {
  inventarioHTML.innerHTML = inventario.listar();
  detalles.innerHTML += `<div>Listado</div>`;
});
btnList2.addEventListener("click", () => {
  inventarioHTML.innerHTML = inventario.listarInverso();
  detalles.innerHTML += `<div>Listado inverso</div>`;
});

inventario.Agregar(new Producto(1, "Coño", 10, 10));
inventario.Agregar(new Producto(2, "Coño 2", 20, 100));
inventario.Agregar(new Producto(3, "Coño 3", 30, 1000));
inventario.Agregar(new Producto(4, "Coño 4", 40, 10000));
