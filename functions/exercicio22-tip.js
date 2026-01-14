/* ### 22. Tip Calculator (mini)

Signature: tip(amount, level)`

Goal: `level` can be `"bad" (0%)`, `"ok" (10%)`, `"good" (15%)`, `"great" (20%)`. 

Return a **formatted price** using `formatPrice` with `€`. (Composition + conditionals)

tip(50, "good");  // "€7.50"
tip(50, "bad");   // "€0.00"
*/

function formatPrice(amount, symbol) {
    const amountFormat = amount.toFixed(2);
    return `${symbol}${amountFormat}`;
}

function tip(amount, level) {
    let finalTip;
    if (level === 'great') {
        finalTip = amount * 0.2;
    } else if (level === 'good') {
        finalTip = amount * 0.15;
    } else if (level === 'ok') {
        finalTip = amount * 0.10
    } else if (level === 'bad') {
        finalTip = 0;
    }
    return formatPrice(finalTip, '€');
}

console.log(tip(50, "good"));  // "€7.50"
console.log(tip(50, "great"));  // "€7.50"
console.log(tip(50, "bad"));  // "€7.50"
console.log(tip(100, "ok"));  // "€7.50"