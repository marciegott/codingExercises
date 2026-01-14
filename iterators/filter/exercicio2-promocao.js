/**
Filtra os preços, retornando apenas os menores que 50.
    - param {number[]} arr - Array de preços.
    - returns {number[]} Novo array com preços menores que 50.
 */

const precos = [120, 45, 30, 80, 15, 200];
const resultadoEsperado = [45, 30, 15];

function filtrarPrecosBaixos(arr) {
    return arr.filter(num => {
        return num < 50;
    });
}

filtrarPrecosBaixos(precos);



//CHECAGEM SE DEU CERTO! 
if (
    JSON.stringify(filtrarPrecosBaixos(precos)) ===
    JSON.stringify(resultadoEsperado)
) {
    console.log("Parabéns! Você acertou.");
} else {
    console.log(
        `Esperado: ${JSON.stringify(resultadoEsperado)}, Obtido: ${JSON.stringify(
            filtrarPrecosBaixos(precos)
        )}`
    );
}