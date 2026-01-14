
/**
 * Encontra a maior nota no array.
    - param {number[]} arr - Array de notas.
    - returns {number} A maior nota.
 */


const notas = [5.5, 8.0, 9.5, 4.0, 7.0];
const resultadoEsperado = 9.5;

function encontrarMaiorNota(arr) {
    return arr.reduce((acc, cur) => {
        if (acc > cur) {
            return acc;
        }
        return cur;
    }, 0)
}

console.log(encontrarMaiorNota(notas));

console.assert(
    encontrarMaiorNota(notas) === resultadoEsperado,
    `Esperado: ${resultadoEsperado}, Obtido: ${encontrarMaiorNota(notas)}`
);