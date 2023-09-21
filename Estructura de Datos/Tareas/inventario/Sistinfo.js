class producto {
    constructor (codigo, nombre, cantidad, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    info(){
        return `codigo: ${this.codigo}, nombre: ${this.nombre}, cantidad: ${this.cantidad}, precio: ${this.precio}`;
        
    }
    infoHTML() {
        return `<div> 
        <h3>${this.codigo} ${this.nombre}</h3>
        <p>${this.cantidad} ${this.precio}<p> 
        </div>`
    }
}

class Inventario{
    constructor(){
        this.datos=[];
    }
    Agregar(producto){
        this.datos.push(producto)
    }
    Eliminar(codigo){
        let nuevo = [];
        for (let i = 0; i < this.datos.length; i++)
        {
            if (this.datos[i].codigo != codigo)
            {
                nuevo.push(this.datos[i]);
            }
        }
        this.datos = nuevo;
    }
    Buscar(codigo){
        let busqueda = [];
        for (let i = 0; i < this.datos.length; i++)
        {
            if (this.datos[i].codigo == codigo)
            {
                busqueda.push(this.datos[i].InfoHTML());
            }
        }
        return busqueda;
    }
    Insertar(posicion, producto)
    {
        let nuevo = [];
        for (let i = 0; i < posicion - 1; i++)
        {
            nuevo.push(this.datos[i]);
        }
        nuevo.push(producto);
        for (let i = posicion; i < this.datos.length + 1; i++)
        {
            nuevo.push(this.datos[i - 1]);
        }
        this.datos = nuevo;
    }
    Listar(){
        let infoHTML = "";
        for(let i = 0; i < this.datos.length; i++)
        {
            infoHTML += `<br>${this.datos[i].InfoHTML()}`;
        }
        return infoHTML;
    }
    ListarInverso()
    {
        let infoHTML = "";
        for(let i = 0; i < this.datos.length; i++)
        {
            infoHTML += `<br>${this.datos[this.datos.length - 1 - i].InfoHTML()}`;
        }
        return infoHTML;
    }
}


let miInventario = new Inventario();
const btnAdd=document.getElementById("btnAdd");
const btnBusq = document.getElementById("btnBusq");
const btnDel = document.getElementById("btnDel");
const btnIns = document.getElementById("btnIns");
const btnList = document.getElementById("btnList");
const btnList2 = document.getElementById("btnList2");
const detalles = document.getElementById("detalles");
const inventarioHTML = document.getElementById("inventarioHTML");


btnAdd.addEventListener("click",() =>{
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let cantidad = document.getElementById('cantidad').value;
    let precio = document.getElementById('precio').value;
    let nuevo = new Producto(codigo, nombre, cantidad, precio);
    miInventario.Agregar(nuevo);
    detalles.innerHTML += `<div>Agregar: ${nombre} con código: ${codigo}</div>`;
});
btnBusq.addEventListener("click", () => 
{
    let codigo = document.getElementById('codigo').value;
    inventarioHTML.innerHTML = miInventario.Buscar(codigo);
    detalles.innerHTML += `<div>Buscar código: ${codigo}</div>`;
});
btnDel.addEventListener("click", () => 
{
    let codigo = document.getElementById('codigo').value;
    miInventario.Eliminar(codigo);
    detalles.innerHTML += `<div>Eliminar código: ${codigo}</div>`;
});
btnIns.addEventListener("click", () => 
{
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let cantidad = document.getElementById('cantidad').value;
    let precio = document.getElementById('precio').value;
    let nuevo = new Producto(codigo, nombre, cantidad, precio);
    let pos = document.getElementById('pos').value;
    pos == "" ? pos = 1 : null;
    miInventario.Insertar(pos, nuevo);
    detalles.innerHTML += `<div>Insertar: ${nombre} con código: ${codigo} en ${pos}</div>`;
});
btnList.addEventListener("click", () => 
{
    inventarioHTML.innerHTML = miInventario.Listar();
    detalles.innerHTML += `<div>Devolver lista</div>`;
});
btnList2.addEventListener("click", () => 
{
    inventarioHTML.innerHTML = miInventario.ListarInverso();
    detalles.innerHTML += `<div>Devolver lista inversa</div>`;
});
