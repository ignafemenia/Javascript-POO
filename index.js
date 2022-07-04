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

    depositoEncuenta(valor) {
        CuentaCorriente2.saldo = CuentaCorriente2.saldo + 100 +valor;
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