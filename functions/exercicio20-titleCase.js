/* 
20. Title Case (no loops!)
Signature: `titleCase(word)`
Goal: Return the word with first letter uppercase, rest lowercase. 

titleCase("hELLo"); // "Hello"
titleCase("js");    // "Js"
*/

function titleCase(word) {
    const firstLetter = word.at(0).toUpperCase();
    const rest = word.slice(1, word.length).toLowerCase();
    const fullText = firstLetter + rest;
    return fullText;
}

console.log(titleCase('hEllo'));
console.log(titleCase('JS'));
console.log(titleCase('gato TINo'));

