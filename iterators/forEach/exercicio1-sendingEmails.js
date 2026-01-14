/**
Simula o envio de emails para cada usuário.
    - param {string[]} arr - Array de nomes de usuários.
    
    -> Saída esperada no console:
    "Enviando email para Ana"
    "Enviando email para Bruno"
    "Enviando email para Carlos"
*/

const usuarios = ["Ana", "Bruno", "Carlos"];

function enviarEmails(arr) {
    arr.forEach(user => {
        console.log(`Enviando email para ${user}`);
    })
}

enviarEmails(usuarios);
