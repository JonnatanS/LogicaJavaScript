let arr = ["Jonnatan", "Lucas", "Roberta"];
let menu;
let i;
alert("Bem vindo ao Consultório Médico!");

do {
  menu = prompt(
    "Escolha uma das Opções: " +
      "\n1 - Novo Paciente" +
      "\n2 - Consultar Paciente" +
      "\n3 - Sair"
  );

  switch (menu) {
    case "1":
      let adicionar = prompt(
        "Digite o nome do Paciente que deseja Adicionar: "
      );
      arr.push(adicionar);
      alert("Paciente: " + adicionar + " adicionado!");
      for (i = 0; i < arr.length; i++) {
        prompt("Fila de Espera: " + (i + 1) + "°: " + arr[i]);
      }
      break;

    case "2":
      let consulta = arr.shift();
      alert("Paciente: " + consulta + " está sendo Atendida(o):");
      for (i = 0; i < arr.length; i++) {
        prompt("Fila de Espera: " + (i + 1) + "°: " + arr[i]);
      }
      break;

    case "3":
      alert("Ótima Consulta!");
      break;

    default:
      alert("Erro digite uma das Opções");
  }
} while (menu !== "3");
