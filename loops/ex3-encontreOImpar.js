/**
Encontra e retorna o primeiro número ímpar em um array.
param {number[]} arr - O array de números.
returns {number | string} O primeiro ímpar ou uma mensagem se nenhum for encontrado.
 */

function encontrarPrimeiroImpar(arr) {
    // Use um loop 'while' ou 'for' aqui
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i] % 2;
        if (num !== 0) {
            return `O primeiro ímpar é: ${arr[i]}`;
            break;
        }
        //se o array n tiver nenhum ímpar!
    }
    return 'Nenhum ímpar encontrado.';
}

const numeros = [1, 2, 4, 6, 7, 8, 10, 12];
const resultadoEsperado = 7;
const resultado = encontrarPrimeiroImpar(numeros);

console.assert(resultado === resultadoEsperado,
    `Resultado esperado: ${resultadoEsperado}, Resultado obtido: ${resultado}`);