const numero = prompt("Tabuada: Escolha um numero: ");

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + " * " + fator + " = " + numero * fator + "\n";
}
prompt("O resultado de: " + numero + ":\n\n " + resultado);
