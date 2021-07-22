import Funcionario from "./Funcionario.js";

class Gerente extends Funcionario {
  constructor(cpf, nome, salario) {
    super(cpf, nome, salario);
    this._bonificacao = 1.1;
  }
}

export default Gerente;
