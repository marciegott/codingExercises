/***Signature:** `firstChar(text)`
**Goal:** Return the first character, or `""` if `text` is empty.

function firstChar(text) {
return "bla"
}

firstChar("Codecademy"); // "C"
firstChar("");           // ""
```*/



function firstChar(text) {
    const first = text.at(0)
    if (first === undefined) {
        return `""`;
    } else {
        return first;
    }
}

console.log(firstChar('olá'));
console.log(firstChar(''));
