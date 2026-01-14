/*
Signature: `priceTag(amount, symbol)`
Goal: Use `formatPrice` internally. If `amount === 0`, return `"Free"`, else formatted price.
priceTag(0, "€");    // "Free"
priceTag(7.5, "$");  // "$7.50"
*/

function formatPrice(amount, symbol) {
    const amountFormat = amount.toFixed(2);
    return `${symbol}${amountFormat}`;
}

function priceTag(amount, symbol) {
    if (amount === 0) {
        return 'Free!';
    } else {
        const total = formatPrice(amount, symbol);
        return total;
    }
}

console.log(priceTag(0, "€"));
console.log(priceTag(7.5, "$"));