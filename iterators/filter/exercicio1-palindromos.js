/**
Filtra a lista, retornando apenas as palavras que são palíndromos.
    - param {string[]} arr - Array de palavras.
    - returns {string[]} Novo array com apenas os palíndromos.
 */

const palavras = ["roma", "ovo", "teste", "arara", "radar", "carro"];
const resultadoEsperado = ["ovo", "arara", "radar"];
const palindromos = encontrarPalindromos(palavras);


function encontrarPalindromos(arr) {
    return arr.filter(word => {
        const wordBackwards = word.split("").reverse().join("");
        return word === wordBackwards;
    });
}

console.log(palindromos);




//checagem: só aparece algo se dá falso!
console.assert(
    JSON.stringify(encontrarPalindromos(palavras)) ===
    JSON.stringify(resultadoEsperado),
    `Esperado: ${resultadoEsperado}, Obtido: ${encontrarPalindromos(palavras)}`
);


/*
como eu fiz antes de saber que tinha que botar outro return!!!!

    function encontrarPalindromos(arr) {
    (AQUI IA UM RETURN AO INVÉS DE DECLARAR UMA VARIÁVEL -> const newArray = arr.filter(word => {
        const wordBackwards = word.split("").reverse().join("");
        return word === wordBackwards;
    });
} */
