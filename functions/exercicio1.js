/*
EX.1 - Hello, You!
**Goal:** Return `"Hello, <name>!"`. If `name` is empty or only spaces, return `"Hello!"`.
*/

function greet(name) {
    if (name && name.trim() !== "") {
        return `Hello, ${name}!`;
    }
    else {
        return "Hello!"
    }
}

console.log(greet('Marcie'));
console.log(greet());
console.log(greet(" "));
console.log(greet("Icaro"));