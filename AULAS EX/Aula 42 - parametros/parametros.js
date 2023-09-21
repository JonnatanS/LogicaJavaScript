function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

//dobro(5);
//dobro(7);

//dobro();

function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + "!");
}

//dizerOla("Jonnatan");
//dizerOla();

function soma(a, b) {
  alert("O resultado da soma é " + (a + b));
}

//soma(7, 6);
//soma(1, 2);

function criarUsuario(nome, email, senha, tipo) {
  const usuario = {
    nome, // mesmo que nome: nome
    email,
    senha,
    tipo,
  };

  console.log(usuario);
}

function muitoParametros(nome, telefone, endereco, aniversario, email, sebha) {
  //..
}

function objetoComoParametro(usuario) {
  //..

  usuario.nome;
  usuario.email;
}

muitoParametros("Nome", "telefone");

const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  endereco: "",
  aniversario: "",
};

objetoComoParametro(dadosDoUsuario);
