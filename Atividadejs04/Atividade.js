let soma = 0;
let numero;

while (true) {
    numero = prompt("Digite um número (ou deixe em branco para encerrar):");

    if (numero === null || numero === "") {
        break;
    }

    numero = parseFloat(numero);

    if (!isNaN(numero)) {
        soma += numero;
    } else {
        alert("Número inválido. Por favor, digite um número válido.");
    }
}

document.write(`A soma dos números digitados é: ${soma}`);
