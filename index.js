class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
}
class CuentaCorriente{
    numero;
    saldo;
    agencia;

    constructor() {
        this.#saldo = 0;
        this.numero = '';
        this.agencia = '';
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }
}


const cliente1 = new Cliente();
cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "12341";
cliente1.rutCliente = "V21422142141"

const CuentaCorriente1 = new CuentaCorriente();
CuentaCorriente1.numero = "10923";
CuentaCorriente1.saldo = 2000;
CuentaCorriente1.agencia = 1011;



const cliente2 = new Cliente();
cliente2.nombreCliente2 = "Leonardo";
cliente2.dniCliente2 = "13804060";
cliente2.rutCliente = "V21422141"


const CuentaCorriente2 = new CuentaCorriente();
CuentaCorriente2.numero = "12345125125";
CuentaCorriente2.saldo = 1000;
CuentaCorriente2.agencia = 1002;
console.log(cliente1);
console.log(cliente2);

console.log(CuentaCorriente2.saldo);

CuentaCorriente2.depositoEncuenta(100);