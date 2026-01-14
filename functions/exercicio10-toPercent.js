/*
Signature: `toPercent(part, total)`

Goal: Return a string like `"25%"` (rounded to 0 decimals). If `total <= 0`, return `"0%"`.

toPercent(1, 4);  // "25%"
toPercent(3, 0);  // "0%"
*/

function toPercent(part, total) {

    if (total <= 0) {
        return '0%';
    } else {
        let value = Math.round((part * 100) / total);
        return `${value}%`;
    }
}

console.log(toPercent(1, 4));
console.log(toPercent(2, 7));
console.log(toPercent(0, 4));