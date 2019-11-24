//OTRA FORMA DE DEFINIR UNA CLASE. COMPARAR CON cliente.js

class Cliente {
    constructor(nombre, saldo) {
      this.nombre=nombre;
      this.saldo=saldo;      
    }

    depositar(dinero)
    {
      this.saldo=this.saldo+dinero;
    }    

    extraer(dinero)
    {
      this.saldo=this.saldo-dinero;
    }    
  }