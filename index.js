import Cliente from "./Cliente.js";
import Diretor from "./Funcionarios/Diretor.js";
import Gerente from "./Funcionarios/Gerente.js";
import SistemaAutenticacao from "./SistemaAutenticacao.js";

const diretor = new Diretor(999, "Lala", "09898988772");
diretor.cadastrarSenha("123456");

const gerente = new Gerente(888, "Ricardo", "03030300333");
gerente.cadastrarSenha("123");

const cliente = new Cliente("Ana", "123", "321");

console.log(SistemaAutenticacao.login(gerente, "123"));
console.log(SistemaAutenticacao.login(diretor, "123456"));
console.log(SistemaAutenticacao.login(cliente, "321"));
