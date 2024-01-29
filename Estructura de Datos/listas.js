class Alumno{
    constructor(ncta, nombre){
      this.ncta=ncta;
      this.nombre=nombre;
      this.siguiente=null;
    }
    infoHtml(){}
  }
 
  class Grupo{
    constructor(){
      this.primero=null;
    }
    agregar(nuevo){
      if (this.primero==null)
        this.primero=nuevo;
      else{
        this._agregarRec(nuevo, this.primero)        
      }
    }
    _agregarRec(nuevo, nodox){
      if (nodox.siguiente !=null) {
        this._agregarRec(nuevo ,nodox.siguiente)
      } else {
        nodox.siguiente = nuevo
      }
    }
    
    
    agregarInicio(nuevo){
      nuevo.siguiente = this.primero;
      this.primero = nuevo;
    }

    extraerprimero(){
      let esuno;
      esuno = this.primero.siguiente
      this.primero;
      return esuno
    }

    extraerultimo(){
      if(this.primero == null){
        return null
      }
      else if(this.primero.siguiente == null){
        return this.extraerPrimero()
      }
      else{
        let aux = this.primero
        let ultimo = null
        while(aux.siguiente.siguiente != null){
          aux = aux.siguiente
        }
        ultimo = aux.siguiente
        aux.siguiente = null
        return ultimo
      }
    }

    listar(){
        let info= ""
        let ultimo = this.primero
        while (ultimo  != null) {
            info += ultimo.nombre + " ";
            info += ultimo.ncta + " ";
            ultimo = ultimo.siguiente

        }
        return info;
    }

  }
 
 
//app
  let miGrupo=new Grupo();
 
  let nuevo=new Alumno(1,'Ana');
  miGrupo.agregar(nuevo);
  nuevo=new Alumno(2,'Bertha');
  miGrupo.agregar(nuevo);
  nuevo=new Alumno(3,'Carlos');
  miGrupo.agregar(nuevo);
  console.log(miGrupo.listar());
 let uno=miGrupo.extraerprimero();
 let final=miGrupo.extraerultimo();
 nuevo= new Alumno(8, 'Luis')
 miGrupo.agregarInicio(nuevo);
 console.log(miGrupo.listar())
 
 

  