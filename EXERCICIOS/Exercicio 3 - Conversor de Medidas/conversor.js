const valor = prompt("Digite o numero que deseja converter em metros: ");

const valConversao = prompt(
  "Você deseja converter para: \n1 - milimetro(mm)\n2 - centrimetro(cm) \n3 - decimetro(dm) \n4 - decametro(dam) \n5 - hectometro(hm) \n6 - quilometro(kg) "
);

switch (valConversao) {
  case "1":
    alert("O valor da conversão ficou (mm) " + valor * 1000);
    break;

  case "2":
    alert("O valor da conversão ficou (cm) " + valor * 100);
    break;

  case "3":
    alert("O valor da conversão ficou em (dm) " + valor * 10);
    break;

  case "4":
    alert("O valor da conversão ficou em (dam) " + valor / 10);
    break;

  case "5":
    alert("O valor da conversão ficou em (hm) " + valor / 100);
    break;

  case "6":
    alert("O valor da conversão ficou em (km) " + valor / 1000);
    break;

  default:
    alert("Opção Invalida!");
}
