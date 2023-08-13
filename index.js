import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 22233344405;

// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = 33366688802;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 1002;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(conta2);
