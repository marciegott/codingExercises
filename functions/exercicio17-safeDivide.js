/* **Signature:** `safeDivide(a, b)`

**Goal:** Return `a / b`. If `b === 0` or not a number, return `null` */

function safeDivide(a, b) {
    if (b === 0 || Number.isNaN(b)) {
        return null;
    } else {
        return a / b;
    }

}

console.log(safeDivide(2, 0));
console.log(safeDivide(8, 2));

