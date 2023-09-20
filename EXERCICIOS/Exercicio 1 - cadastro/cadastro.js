let nome = prompt("Digite o seu primeiro nome");
console.log(nome);

let sobrenome = prompt("Digite o seu sobrenome");
console.log(sobrenome);

let campo_estudo = prompt("Digite o seu Campo de Estudo");
console.log(campo_estudo);

let ano_nascimento = parseFloat(prompt("Digite o ano de Nascimento"));
console.log(ano_nascimento);
const idade = 2023 - ano_nascimento;
console.log("Nome", nome, sobrenome, "Campo", campo_estudo, "Idade", idade);

alert(
  "Cadastrado!\n" +
    "Nome Completo:\n" +
    nome +
    " " +
    sobrenome +
    "\nCampo de Estudo:\n" +
    campo_estudo +
    "\nIdade:\n" +
    "" +
    idade
);
