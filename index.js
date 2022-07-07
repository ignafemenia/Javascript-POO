//importar clases
import { cliente } from './cliente'
import { CuentaCorriente } from './CuentaCorriente'

const cliente = new cliente('Leonardo', '21903','2141' );
console.log(cliente)


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

const cliente2 = new cliente('Maria', '2045142', '12451');

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2'
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;

let parametroValor = 100;