/*Você trabalha para uma operadora e precisa padronizar a exibição de todos os números de
telefone de 8 dígitos para o formato XXXX-XXXX.

    - param {string[]} arr - Array de números de telefone (8 dígitos).
    - returns {string[]} Novo array de telefones formatados.
 */

const telefones = ["12345678", "87654321", "99998888"];
const resultadoEsperado = ["1234-5678", "8765-4321", "9999-8888"];


function formatarTelefones(arr) {
    return arr.map(num => {
        const firstPart = num.slice(0, 4);
        const secondPart = num.slice(4);
        return `${firstPart}-${secondPart}`;
    });
}

formatarTelefones(telefones);

/*
function formatarTelefones(arr) {
    return arr.map(num => {
        const array = num.split("");
        array.splice(4, 0, "-");
        return array.join("");

        const nome = "icaro".toLocaleLowerCase().charAt(0).includes("i")
    });
}
*/

// FORMATAR TELEFONE

console.assert(
    JSON.stringify(formatarTelefones(telefones)) ===
    JSON.stringify(resultadoEsperado),
    `Esperado: ${resultadoEsperado}, Obtido: ${formatarTelefones(telefones)}`
);
