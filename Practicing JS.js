const prompt = require("prompt-sync")();

let soma = 0;
let numero;

while (true) {
   const numero = parseInt(prompt("Insira um numero inteiro ou um numero negativo para sair:"),10);

    if (numero < 0) {
        break;
    }

    soma += numero;
}

console.log("A soma dos numeros positivos inseridos é:", soma);