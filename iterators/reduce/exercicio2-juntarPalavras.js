/*
 * Concatena as palavras para formar uma frase, separadas por espaço.
    - param {string[]} arr - Array de palavras.
    - returns {string} Frase completa.
 */

const palavras = ["Eu", "amo", "programar", "em", "JavaScript"];
const resultadoEsperado = "Eu amo programar em JavaScript";

function formarFrase(arr) {
    const frase = arr.reduce((acc, cur) => {
        return acc + cur + " ";
    }, "");
    return frase.trim();
}

console.assert(
    formarFrase(palavras) === resultadoEsperado,
    `Esperado: "${resultadoEsperado}", Obtido: "${formarFrase(palavras)}"`
);
