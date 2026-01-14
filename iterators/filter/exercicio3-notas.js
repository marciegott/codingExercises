/* 
    Você é um professor e quer saber quais alunos passaram de ano. 
    A média para aprovação é 7.0 ou maior.
    
    Filtra as notas, retornando apenas as maiores ou iguais a 7.0.
    - param {number[]} arr - Array de notas.
    - returns {number[]} Novo array com notas de aprovação.
*/


const notas = [5.5, 8.0, 9.5, 4.0, 7.0, 6.5];
const resultadoEsperado = [8.0, 9.5, 7.0];

function filtrarAprovados(arr) {
    return arr.filter(nota => {
        return nota >= 7.0;
    });
}

console.log(filtrarAprovados(notas));

console.assert(
    JSON.stringify(filtrarAprovados(notas)) === JSON.stringify(resultadoEsperado),
    `Esperado: ${resultadoEsperado}, Obtido: ${filtrarAprovados(notas)}`
);
