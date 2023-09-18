const pessoas = [];
let somaAlturasHomens = 0;
let numeroMulheres = 0;

function obterDadosPessoa() {
  const altura = parseFloat(prompt("Digite a altura (em metros):"));
  const genero = prompt("Digite o gênero (H para homem, M para mulher):").toUpperCase();

  if (isNaN(altura) || altura <= 0) {
    console.log("Altura inválida. Por favor, insira uma altura válida.");
    return;
  }

  if (genero !== 'H' && genero !== 'M') {
    console.log("Gênero inválido. Use 'H' para homem ou 'M' para mulher.");
    return;
  }

  pessoas.push({ altura, genero });
  console.log("Dados da pessoa adicionados com sucesso.");
}

function calcularResultados() {
  if (pessoas.length < 15) {
    console.log("É necessário inserir informações de pelo menos 15 pessoas.");
    return;
  }

  let maiorAltura = -Infinity;
  let menorAltura = Infinity;

  for (const pessoa of pessoas) {
    if (pessoa.altura > maiorAltura) {
      maiorAltura = pessoa.altura;
    }

    if (pessoa.altura < menorAltura) {
      menorAltura = pessoa.altura;
    }

    if (pessoa.genero === 'H') {
      somaAlturasHomens += pessoa.altura;
    } else {
      numeroMulheres++;
    }
  }

  const mediaAlturaHomens = somaAlturasHomens / (pessoas.length - numeroMulheres);

  console.log(`A maior altura do grupo é: ${maiorAltura.toFixed(2)} metros.`);
  console.log(`A menor altura do grupo é: ${menorAltura.toFixed(2)} metros.`);
  console.log(`A média de altura dos homens é: ${mediaAlturaHomens.toFixed(2)} metros.`);
  console.log(`O número de mulheres é: ${numeroMulheres}.`);
}

console.log("Digite os dados de altura e gênero de 15 pessoas:");
for (let i = 0; i < 15; i++) {
  obterDadosPessoa();
}

console.log("Calculando resultados:");
calcularResultados();
