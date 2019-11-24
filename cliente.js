function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo= saldo;
    this.depositar= depositar;
    this.extraer= extraer;
};

function depositar(monto){
    this.saldo = this.saldo + monto;
};

function extraer(monto){
    this.saldo = this.saldo - monto;
};

