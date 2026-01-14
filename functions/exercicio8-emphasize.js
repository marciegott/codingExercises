/* 
Signature:** `emphasize(message, mark = "!")`
Goal: Return `message` plus `mark` repeated **exactly three times**

emphasize("Nice");      // "Nice!!!"
emphasize("What", "?"); // "What???" 
*/

function emphasize(message, mark = '!') {
    return `${message}${mark.padEnd(3, mark)}`;
}

console.log(emphasize('Nice'));
console.log(emphasize('What', '?'));

//se eu tivesse que fazer com o repeat
function emphasize2(message2, mark2 = '!') {
    return `${message2}${mark2.repeat(3)}`;
}


console.log(emphasize2('Nice'));
console.log(emphasize2('What', '?'));
