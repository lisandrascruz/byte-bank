import Funcionario from "./Funcionario.js";

class Diretor extends Funcionario {
  constructor(cpf, nome, salario, senha) {
    super(cpf, nome, salario);
    this._bonificacao = 2;
  }
}

export default Diretor;
