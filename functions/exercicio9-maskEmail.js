



function maskEmail(email) {
    const index = email.indexOf('@');
    const sizeFirstPart = email.slice(0, index - 1).length;
    const final = email.slice(index);
    return `${email.at(0)}${'*'.repeat(sizeFirstPart)}${final}`;
}


console.log(maskEmail('marcie@gmail.com'))
console.log(maskEmail('ico@gmail.com'))
console.log(maskEmail('dannyjones@mcfly.uk'))

/* primeiro eu tinha feito assim:
function maskEmail(email) {
    const index = email.indexOf('@');
    const final = email.slice(index);
    return `${email.at(0)}${'*'.repeat(3)}${final}`;
}


console.log(maskEmail('marcie@gmail.com'))
console.log(maskEmail('ico@gmail.com'))
console.log(maskEmail('dannyjones@mcfly.uk'))*/