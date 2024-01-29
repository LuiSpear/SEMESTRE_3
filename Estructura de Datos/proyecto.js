// Definición de la clase Nodo para representar un nodo de la lista doblemente enlazada
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
    this.anterior = null;
  }
}

// Definición de la clase ListaDobleEnlazada para representar la lista doblemente enlazada
class ListaDobleEnlazada {
  constructor() {
    this.cabeza = null;
    this.final = null;
  }

  // Método para agregar un nuevo nodo con un valor a la lista
  agregar(valor) {
    let nuevoNodo = new Nodo(valor);
    if (this.cabeza === null) {
      this.cabeza = nuevoNodo;
      this.final = nuevoNodo;
    } else {
      nuevoNodo.anterior = this.final;
      this.final.siguiente = nuevoNodo;
      this.final = nuevoNodo;
    }
  }

  // Método para obtener una representación de la expresión almacenada en la lista
  obtenerExpresion() {
    let expresion = "";
    let nodoActual = this.cabeza;
    while (nodoActual !== null) {
      expresion += nodoActual.valor + " ";
      nodoActual = nodoActual.siguiente;
    }
    return expresion.trim();
  }
}

// Función para resolver expresiones en notación preorder
function expresionpre(expresion) {
  let expresionArray = expresion.split(" ");
  let pila = [];

  expresionArray.reverse().forEach((elemento) => {
    if (!isNaN(elemento)) {
      pila.push(parseInt(elemento));
    } else {
      let oprnd1 = pila.pop();
      let oprnd2 = pila.pop();

      switch (elemento) {
        case "+":
          pila.push(oprnd1 + oprnd2);
          break;
        case "-":
          pila.push(oprnd1 - oprnd2);
          break;
        case "*":
          pila.push(oprnd1 * oprnd2);
          break;
        case "/":
          pila.push(oprnd1 / oprnd2);
          break;
      }
    }
  });

  return pila.pop();
}
// Función para resolver expresiones en notación postorder
function expresionpos(expresion) {
  let expresionArray = expresion.split(" ");
  let pila = [];

  expresionArray.forEach((elemento) => {
    if (!isNaN(elemento)) {
      pila.push(parseInt(elemento));
    } else {
      let oprnd2 = pila.pop();
      let oprnd1 = pila.pop();

      switch (elemento) {
        case "+":
          pila.push(oprnd1 + oprnd2);
          break;
        case "-":
          pila.push(oprnd1 - oprnd2);
          break;
        case "*":
          pila.push(oprnd1 * oprnd2);
          break;
        case "/":
          pila.push(oprnd1 / oprnd2);
          break;
      }
    }
  });

  return pila.pop();
}

// Expresiones matemáticas en notacion preorder y postorder
let expresionPreorder = "- + - 4 2 / * 4 3 6 * * 2 3 4"; // Aqui se modifican los valores
let expresionPostorder = "4 2 - 4 3 * 6 / + 2 3 * 4 * -"; // x2 a lo de arriba

// Creación de una lista para la expresion en notacion preorder
let listaPreorder = new ListaDobleEnlazada();
expresionPreorder.split(" ").forEach((valor) => listaPreorder.agregar(valor));

// mostrar la expresion matematica deconstruida
console.log(
  "Operación matemática deconstruida: ((4 - 2) + (4 * 3) / 6) - (2 * 3 * 4)"
);

// mostrar la expresion en notacion preorder
console.log("\nExpresión en Preorder:");
console.log(listaPreorder.obtenerExpresion());

// creación de una lista para la expresion en notacion postorder
let listaPostorder = new ListaDobleEnlazada();
expresionPostorder.split(" ").forEach((valor) => listaPostorder.agregar(valor));

// mostrar la expresion en notacion postorder
console.log("\nExpresión en Postorder:");
console.log(listaPostorder.obtenerExpresion());

// mostrar el resultado de resolver la expresion en notacion preorder
console.log(
  "\nResultado de la expresión en Preorder:",
  expresionpre(listaPreorder.obtenerExpresion())
);

// mostrar el resultado de resolver la expresion en notacion postorder
console.log(
  "Resultado de la expresión en Postorder:",
  expresionpos(listaPostorder.obtenerExpresion())
);
