/* **Signature:** `sameWord(a, b)`

**Goal:** Return `true` if `a` and `b` are equal ignoring case and surrounding spaces.

sameWord(" Hello ", "hello"); // true
sameWord("JS", "java");       // false */

function sameWord(a, b) {
    const firstWord = a.trim().toLowerCase();
    const secondWord = b.trim().toLowerCase();

    return firstWord === secondWord;
}

console.log(sameWord('batatA   ', 'banana'));
console.log(sameWord('  Hello ', 'hello'));
console.log(sameWord('JS', 'java')); 
