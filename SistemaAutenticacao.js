class SistemaAutenticacao {
  static login(autenticavel, senha) {
    return this._isAutenticavel(autenticavel)
      ? autenticavel.autenticar(senha)
      : false;
  }

  static _isAutenticavel(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
export default SistemaAutenticacao;
