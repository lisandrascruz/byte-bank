/**
 * Abstract Class Conta
 *
 * @class Conta
 */
import Cliente from "./Cliente.js";
class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor === Conta) {
      throw new Error(
        "A classe Conta é abstrata, você não deveria instanciá-la."
      );
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) this._cliente = novoValor;
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  depositar(valor) {
    return valor > 0 ? (this._saldo += valor) : this._saldo;
  }

  sacar(valor) {
    throw new Error(
      "O método 'sacar()' é abstrato e precisa ser implementado pelos filhos."
    );
  }

  _sacar(valor, taxa) {
    const valorDeSaque = valor * taxa;
    return this._saldo >= valorDeSaque ? (this._saldo -= valorDeSaque) : 0;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }

  cadaFilhoComSeuComportamento() {}
}

export default Conta;
