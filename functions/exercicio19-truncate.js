/* 
Signature: `truncate(text, maxLen)`

Goal: If `text` length is over `maxLen`, return the first `maxLen - 1` characters + `"…"`.  Otherwise return original.

truncate("Codecademy", 5); // "Code…"
truncate("JS", 5);         // "JS"
*/

function truncate(text, maxLen) {
    if (text.length > maxLen) {
        const message = text.slice(0, maxLen - 1);
        return `${message}...`;
    }
    return text;
}

console.log(truncate('Codeacademy', 5));
console.log(truncate('JS', 5));
console.log(truncate('cat lover', 3));