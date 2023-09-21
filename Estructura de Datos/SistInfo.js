class Producto {
  constructor(codigo, nombre, cantidad, precio) {
    this.codigo = codigo
    this.nombre = nombre
    this.cantidad = cantidad
    this.precio = precio
  }
  Info() {
    return `${this.codigo}, ${this.nombre}, ${this.cantidad}, ${this.precio}`;
  }
  InfoHTML() {
    return `<div>
            <div>Código: ${this.codigo}</div>
            <div>Nombre: ${this.nombre}</div>
            <div>Cantidad: ${this.cantidad}</div>
            <div>Precio: $${this.precio}</div> 
        </div>`;
  }
}
class Inventario {
  constructor() {
    this.datos = [];
  }
  Agregar(producto) {
    this.datos.push(producto);
  }
  Eliminar(codigo) {
    let nuevo = [];
    for (let i = 0; i < this.datos.length; i++) {
      if (this.datos[i].codigo != codigo) {
        nuevo.push(this.datos[i]);
      }
    }
    this.datos = nuevo;
  }
 
  Listar() {
    let infoHTML = "";
    for (let i = 0; i < this.datos.length; i++) {
      infoHTML += `<br>${this.datos[i].InfoHTML()}`;
    }
    return infoHTML;
  }
  ListarInverso() {
    let infoHTML = "";
    for (let i = 0; i < this.datos.length; i++) {
      infoHTML += `<br>${this.datos[this.datos.length - 1 - i].InfoHTML()}`;
    }
    return infoHTML;
  }
}

const miInventario = new Inventario();
const btnAdd = document.getElementById("btnAdd");
const btnBusq = document.getElementById("btnBusq");
const btnDel = document.getElementById("btnDel");
const btnIns = document.getElementById("btnIns");
const btnList = document.getElementById("btnList");
const btnListInv = document.getElementById("btnListInv");
const detalles = document.getElementById("detalles");
const inventarioHTML = document.getElementById("inventarioHTML");

btnAdd.addEventListener("click", () => {
  let codigo = document.getElementById("codigo").value;
  let nombre = document.getElementById("nombre").value;
  let cantidad = document.getElementById("cantidad").value;
  let precio = document.getElementById("precio").value;
  let nuevo = new Producto(codigo, nombre, cantidad, precio);
  miInventario.Agregar(nuevo);
  detalles.innerHTML += `<div>Agregar: ${nombre} con código: ${codigo}</div>`;
})
btnDel.addEventListener("click", () => {
  let codigo = document.getElementById("codigo").value;
  miInventario.Eliminar(codigo);
  detalles.innerHTML += `<div>Eliminar código: ${codigo}</div>`;
})
btnBusq.addEventListener("click", () => {
    let codigo = document.getElementById("codigo").value;
    inventarioHTML.innerHTML = miInventario.Buscar(codigo);
    detalles.innerHTML += `<div>Buscar código: ${codigo}</div>`;
  })
btnIns.addEventListener("click", () => {
  let codigo = document.getElementById("codigo").value;
  let nombre = document.getElementById("nombre").value;
  let cantidad = document.getElementById("cantidad").value;
  let precio = document.getElementById("precio").value;
  let nuevo = new Producto(codigo, nombre, cantidad, precio);
  let pos = document.getElementById("pos").value;
  pos == "" ? (pos = 1) : null;
  miInventario.Insertar(pos, nuevo);
  detalles.innerHTML += `<div>Insertar: ${nombre} con código: ${codigo} en ${pos}</div>`;
})
btnList.addEventListener("click", () => {
  inventarioHTML.innerHTML = miInventario.Listar();
  detalles.innerHTML += `<div>Devolver lista</div>`;
})
btnListInv.addEventListener("click", () => {
  inventarioHTML.innerHTML = miInventario.ListarInverso();
  detalles.innerHTML += `<div>Devolver lista inversa</div>`;
})
