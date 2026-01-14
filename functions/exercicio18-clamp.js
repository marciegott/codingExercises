/*Signature: clamp(n, min, max)`

Goal: Return `n` but limited to the `[min, max]` range.

clamp(10, 0, 5); // 5
clamp(-2, 0, 5); // 0
*/


function clamp(n, min, max) {
    if (n < min) {
        return min;
    }
    if (n > max) {
        return max;
    }
    if (n >= min && n <= max) {
        return n;
    }
}

console.log(clamp(10, 0, 5));
console.log(clamp(-2, 0, 5));
console.log(clamp(3, 1, 10));


