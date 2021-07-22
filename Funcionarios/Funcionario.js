class Funcionario {
  constructor(cpf, nome, salario, senha) {
    this._cpf = cpf;
    this._nome = nome;
    this._salario = salario;
    this._bonificacao = 1;
    this._senha;
  }

  autenticar(senha) {
    return senha === this._senha;
  }

  cadastrarSenha(senha) {
    this._senha = senha;
  }
}

export default Funcionario;
