/* É Black Friday! Você precisa aplicar um desconto de 10% em todos os produtos da loja.
    - param {number[]} arr - Array de preços originais.
    - @returns {number[]} Novo array com preços com desconto.
*/

const precos = [100, 200, 50, 10];
const resultadoEsperado = [90, 180, 45, 9];

function aplicarDesconto(arr) {
    return arr.map((preco) => {
        return preco * 0.9;
    });
}

console.log(aplicarDesconto(precos));
console.assert(
    JSON.stringify(aplicarDesconto(precos)) === JSON.stringify(resultadoEsperado),
    `Esperado: ${resultadoEsperado}, Obtido: ${aplicarDesconto(precos)}`
);
