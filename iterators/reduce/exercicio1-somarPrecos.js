/* Você está finalizando uma compra e precisa somar o valor de todos os itens do carrinho.
    - param {number[]} arr - Array de preços.
    - returns {number} Soma total.
 */

const precos = [29.9, 10.0, 5.5, 100.0];
const resultadoEsperado = 145.4;

function somarPrecos(arr) {
    return arr.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
}

console.log(somarPrecos(precos));

console.assert(
    somarPrecos(precos) === resultadoEsperado,
    `Esperado: ${resultadoEsperado}, Obtido: ${somarPrecos(precos)}`
);


// (acc, cur) => { return acc + cur }

/* 
    -> MAIS OU MENOS COMO FUNCIONA O REDUCE POR BAIXO DOS PANOS!
    
    function reduce(cb, initialValue) {
    let accInterno = initialValue
    arr.foreach((item) => {
        accInterno = cb(accInterno, item)
    })

    return accInterno
}

reduce(cb, initialValue)


function somarPrecos(arr) {
    const arr = []
    const soma = arr.reduce(
        (acc, cur) => {
            return acc + 1
        }, 0);

    return soma
}
    */

