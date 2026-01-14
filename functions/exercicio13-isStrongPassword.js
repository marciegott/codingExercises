/* 
13. Password Strength (simple)
Signature: isStrongPassword(pw)
Goal: Return `true` if:

- length ≥ 8
- contains at least one uppercase letter
- contains at least one number
isStrongPassword("Hello123"); // true
isStrongPassword("weak");     // false

*/

function isStrongPassword(pw) {
    if (pw.length < 8) {
        return false;
    }
    if (pw.toLowerCase() === pw) {
        return false;
    }

    return (pw.indexOf('1') !== -1 || pw.indexOf('2') !== -1 || pw.indexOf('3') !== -1 || pw.indexOf('4') !== -1 || pw.indexOf('5') !== -1 || pw.indexOf('6') !== -1 || pw.indexOf('7') !== -1 || pw.indexOf('8') !== -1 || pw.indexOf('9') !== -1 || pw.indexOf('0') !== -1);

}


console.log(isStrongPassword('hello2'));
console.log(isStrongPassword('Teste123'));