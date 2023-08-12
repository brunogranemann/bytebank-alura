export class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) return; // Aqui está sendo aplicado o Early return, um meio de reduzir o número de identações de um código que são geradas pelo uso excessivo de condicionais
        this._saldo += valor;
    }
}
