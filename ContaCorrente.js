import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    #cliente;
    agencia;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.#cliente = novoValor;
        }
    }

    get cliente() {
        return this.#cliente;
    }

    #saldo = 0;

    get saldo () {
        return this.#saldo;
    }

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return; // Aqui está sendo aplicado o Early return, um meio de reduzir o número de identações de um código que são geradas pelo uso excessivo de condicionais
        this.#saldo += valor;
    }

    transferir (valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
