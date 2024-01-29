class Nodo{
    constructor(dato){
      this.dato=dato;
      this.siguiente=null;
      this.anterior=null;
    }
  }
 
  class LinkedList{
    constructor(){
      this.primero=null;
    }
      agregar(nuevo){
      if (this.primero==null)
        this.primero=nuevo;
      else{
        let aux=this.primero;
          while (aux.siguiente!=null)
          aux=aux.siguiente;
          aux.siguiente=nuevo;
          nuevo.anterior=aux;
      }
    }
   
    listar(){
      if (this.primero==null)
        return "";
      else
        return this._recListar(this.primero);
    }
    _recListar(nodo){
      if (nodo.siguiente==null)
        return nodo.dato;
      else
        return nodo.dato + ' ' + this._recListar(nodo.siguiente);
    }



   






  }
 
  let grupo=new LinkedList();
  let nuevo=new Nodo("F");
  grupo.agregar(nuevo);
  nuevo=new Nodo("J");
  grupo.agregar(nuevo);
  nuevo=new Nodo("K");
  grupo.agregar(nuevo);
  nuevo=new Nodo("M");
  grupo.agregar(nuevo);
  nuevo=new Nodo("Q");
  grupo.agregar(nuevo);
  nuevo=new Nodo("T");
  grupo.agregar(nuevo);  
  nuevo=new Nodo("M");
  grupo.agregar(nuevo);                
 
  console.log(grupo.listar());
  

