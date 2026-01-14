/* 
Signature: shippingCost(countryCode)
Goal: Return a message:

- `"Free shipping"` if `countryCode` is `"US"` or `"ES"`,
- `"€5 flat"` if `"PT"` or `"FR"`,
- `"Contact support"` otherwise.
*/

function shippingCost(countryCode) {
    const code = countryCode.toUpperCase();
    if (code === 'US' || code === 'ES') return 'Free shipping';
    if (code === 'PT' || code === 'FR') return '€5 flat';
    return 'contact support';
}

console.log(shippingCost('ES'));
console.log(shippingCost('US'));
console.log(shippingCost('PT'));
console.log(shippingCost('FR'));
console.log(shippingCost('BR'));
console.log(shippingCost('us'));
console.log(shippingCost('es'));