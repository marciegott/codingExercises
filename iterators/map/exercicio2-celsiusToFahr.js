/*Você está criando um aplicativo de clima e precisa converter uma lista de temperaturas de Celsius
para Fahrenheit. A fórmula é (C * 9/5) + 32.

    - param {number[]} arr - Array de temperaturas em Celsius.
    - returns {number[]} Novo array com temperaturas em Fahrenheit.
*/

const celsius = [0, 10, 20, 30, 100];
const resultadoEsperado = [32, 50, 68, 86, 212];
function converterParaFahrenheit(arr) {
    return arr.map(temp => {
        return (temp * 9 / 5) + 32;
    })
}

console.log(converterParaFahrenheit(celsius));

console.assert(
    JSON.stringify(converterParaFahrenheit(celsius)) ===
    JSON.stringify(resultadoEsperado),
    `Esperado: ${resultadoEsperado}, Obtido: ${converterParaFahrenheit(celsius)}`
);