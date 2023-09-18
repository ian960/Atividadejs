// Função para calcular a média das notas
function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
  }
  return soma / notas.length;
}

// Função para determinar o status do aluno
function determinarStatus(media) {
  if (media >= 7) {
      return "Aprovado";
  } else if (media >= 4) {
      return "Recuperação";
  } else {
      return "Reprovado";
  }
}

// Solicitar as três notas do aluno
const notas = [];
for (let i = 1; i <= 3; i++) {
  const nota = parseFloat(prompt(`Digite a ${i}ª nota:`));
  notas.push(nota);
}

// Calcular a média das notas
const media = calcularMedia(notas);

// Determinar o status do aluno
const status = determinarStatus(media);

// Exibir o resultado
if (status === "Aprovado") {
  console.log(`O aluno está ${status} com média ${media.toFixed(2)}.`);
} else if (status === "Recuperação") {
  const notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação:"));
  const mediaRecuperacao = (media + notaRecuperacao) / 2;
  if (mediaRecuperacao >= 5) {
      console.log(`O aluno está aprovado na recuperação com média ${mediaRecuperacao.toFixed(2)}.`);
  } else {
      console.log(`O aluno está reprovado na recuperação com média ${mediaRecuperacao.toFixed(2)}.`);
  }
} else {
  console.log(`O aluno está ${status} com média ${media.toFixed(2)}.`);
}
