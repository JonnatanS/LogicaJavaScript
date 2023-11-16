function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do Triangulo: "));
  const altura = parseFloat(prompt("Informe a altura do Triangulo: "));
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe a base do retangulo: "));
  const altura = parseFloat(prompt("Informe a altura do retangulo: "));
  return base * altura;
}

function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe o lado do quadrado: "));
  return lado * lado;
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior do Trapézio: "));
  const baseMenor = parseFloat(prompt("Informe a base menor do Trapézio: "));
  const altura = parseFloat(prompt("Informe a altura do trapezio: "));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe a area do circulo: "));
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Calculadora Geometrica\n" +
      "1. Calcular area do Triangulo\n" +
      "2. Calcular area do Retangulo\n" +
      "3. Calcular area do Quadrado\n" +
      "4. Calcular area do Trapezio\n" +
      "5. Calcular area do Circulo\n" +
      "6. Sair\n"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;

      case "2":
        resultado = calcularAreaRetangulo();
        break;

      case "3":
        resultado = calcularAreaQuadrado();
        break;

      case "4":
        resultado = calcularAreaTrapezio();
        break;

      case "5":
        resultado = calcularAreaCirculo();
        break;

      case "6":
        alert("Saindo ...");
        break;

      default:
        alert("Opcão invalida!");
    }

    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
