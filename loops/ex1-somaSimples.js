/**
 * Soma todos os valores numéricos de um array.
 * param {number[]} arr - O array de números (notas) a ser somado.
 * returns {number} A soma total dos elementos.
 */
function somaSimples(arr) {
    // Seu código com o loop 'for' ou 'while' aqui
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma = soma + arr[i];
    }
    return soma;
}

const notas = [7, 8.5, 9, 6, 10];
const resultadoEsperado = 40.5;
const resultado = somaSimples(notas) //chamada da função

console.log(`Resultado esperado: ${resultadoEsperado}, Resultado obtido: ${resultado}`);

console.assert(resultado === resultadoEsperado,
    `Resultado esperado: ${resultadoEsperado}, Resultado obtido: ${resultado}`);