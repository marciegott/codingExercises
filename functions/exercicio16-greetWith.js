/* 
Signature: `smartGreet(timeOfDay, name)`

Goal: If `timeOfDay` is `"morning"|"afternoon"|"evening"`, call `greetWith` from #2; otherwise fall back to `greet` from #1.

smartGreet("morning", "Kai"); // "Good morning, Kai!"
smartGreet("noon", "Kai");    // "Hello, Kai!"
*/

//exercício 1
function greet(name) {
    return `Hello, ${name}!`;
}

function greetWith(title, name) {
    return `Good ${title}, ${name}`;
}

function smartGreet(timeOfDay, name = 'friend') {
    if (timeOfDay === 'morning' || timeOfDay === 'afternoon' || timeOfDay === 'night') {
        const greeting = greetWith(timeOfDay, name);
        return greeting;
    } else {
        const greeting = greet(name);
        return greeting;

    }
}

console.log(smartGreet('morning', 'Kai'));
console.log(smartGreet('afternoon', 'Tom Fletcher'));
console.log(smartGreet('noon'));
