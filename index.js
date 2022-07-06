//importar clases
sdf
import { cliente } from './cliente'
import { CuentaCorriente } from './CuentaCorriente'

const cliente = new cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '21903';
cliente.rutCliente = '2141';


const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1'
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;

//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo(); 
console.log('El Saldo actual es '+saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log('El Saldo actual es '+saldo);

saldo = cuentaDeLeonardo.retirarDeCuenta(100);
console.log('El Saldo actual es '+saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(10)
console.log('El Saldo actual es '+saldo);

const cliente2 = new cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '2045142';
cliente2.rutCliente = '12451';

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2'
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente;
