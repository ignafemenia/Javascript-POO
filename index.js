class Cliente
{
    nombreCliente;
    dniCliente;
    numeroCuenta;
    saldoCuenta;
    rutCliente;
}
const cliente1 = new Cliente();


cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "12341";
cliente1.numeroCuenta = "10923";
cliente1.saldoCuenta = 2000;

const cliente2 = new Cliente();

cliente2.nombreCliente2 = "Leonardo";
cliente2.dniCliente2 = "13804060";
cliente2.numeroCuenta2 = "12345125125";
cliente2.saldoCuenta2 = 1000;


console.log(cliente1);
console.log(cliente2);
