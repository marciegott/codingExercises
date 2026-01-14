/* 
Signature: canLogin(inputUser, inputPass)

Goal: Given fixed credentials inside the function (e.g., `USER="admin"`, `PASS="secret123"`), return:

- `"Welcome, admin!"` if both match (case-sensitive),
- `"Wrong password"` if user matches but password doesn’t,
- `"User not found"` otherwise.
*/


function canLogin(inputUser, inputPass) {
    const userC = 'admin';
    const passC = 'secret123'

    if (inputPass != passC) {
        return 'Wrong password';
    }
    if (inputUser === userC && inputPass === passC) {
        return 'Welcome, admin!';
    }
    return 'User not found';
}

console.log(canLogin('admin', 'secret123'));
console.log(canLogin('ADmin', 'secret123'));
console.log(canLogin('admin', 'Secret123'));
