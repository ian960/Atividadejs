// Função para calcular a média ponderada
function calcularMediaPonderada(nota1, nota2, nota3) {
    const peso1 = 2;
    const peso2 = 3;
    const peso3 = 5;

    const somaPesos = peso1 + peso2 + peso3;
    const mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / somaPesos;

    return mediaPonderada;
}

// Pergunte as notas ao usuário
const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));

const mediaPonderada = calcularMediaPonderada(nota1, nota2, nota3);
console.log("A média ponderada é: " + mediaPonderada);
