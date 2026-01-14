/***Signature:** `formatPrice(amount, symbol)`

**Goal:** Return `<symbol><amount with 2 decimals>`, e.g. `€12.30`.
*/

/* primeira ideia, tentando só juntar as strings.

function formatPrice(amount, symbol) {
    let price = symbol.concat(amount);
    return price;    
}
*/

//    return (`${symbol} ${amount}`)

function formatPrice(amount, symbol) {
    const amountFormat = amount.toFixed(2);
    return `${symbol}${amountFormat}`;
}

console.log(formatPrice(50, '$'));
console.log(formatPrice(123.9, '$'));
console.log(formatPrice(1.8, 'R$'));