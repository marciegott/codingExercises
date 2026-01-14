/* Você tem uma lista de itens para comprar. 
Imprima cada item com uma caixa de seleção [ ] na frente.
Saída esperada no console:
"[ ] Arroz"
*/

const itens = ["Arroz", "Feijão", "Carne"];

function imprimirLista(arr) {
    arr.forEach(item => {
        console.log(`[ ] ${item}`);
    })
}

imprimirLista(itens);
