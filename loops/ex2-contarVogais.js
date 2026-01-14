/**
 * Conta o número de vogais (a, e, i, o, u) em uma string.
 * param {string} str - A string a ser analisada.
 * returns {number} O número de vogais encontradas.
 */
function contarVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let numVogais = 0;
    for (let i = 0; i < str.length; i++) {
        let letra = str[i];
        if (vogais.includes(letra)) {
            numVogais++;
        }
    }
    return numVogais;

}



const palavra = "helicoptero";
const resultadoEsperado = 3;
const resultado = contarVogais(palavra)
console.log(resultado);

console.assert(resultado === resultadoEsperado,
    `Resultado esperado: ${resultadoEsperado}, Resultado obtido: ${resultado}`);
