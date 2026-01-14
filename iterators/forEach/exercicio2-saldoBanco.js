/*
Você tem uma lista de movimentações bancárias (positivas são depósitos, negativas são saques).
Calcule o saldo final usando forEach.
    - param {number[]} arr - Array de movimentações.
    - returns {number} Saldo final
*/

const movimentacoes = [100, -20, -30, 50];
const resultadoEsperado = 100;

function calcularSaldo(arr) {
    let saldo = 0;
    arr.forEach(valor => {
        saldo = saldo + valor;
    });
    return saldo;
}

console.assert(
    calcularSaldo(movimentacoes) === resultadoEsperado,
    `Esperado: ${resultadoEsperado}, Obtido: ${calcularSaldo(movimentacoes)}`
);
