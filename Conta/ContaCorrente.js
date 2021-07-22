/**
 * ContaCorrente
 *
 * @class ContaCorrente
 * @extends {Conta}
 */
import Conta from "./Conta.js";

class ContaCorrente extends Conta {
  static numeroContas = 0;
  static taxa = 1.1;
  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numeroContas++;
  }

  sacar(valor) {
    const taxa = 1.1;
    return super._sacar(valor, taxa);
  }
}

export default ContaCorrente;
