
/*
Seu trabalho é transformar essa lista de logs crus em uma versão padronizada,
pronta para exibição: capitalização correta, sem espaços extras, sem o último
log duplicado, e todos unidos em uma string final que será enviada ao painel.
*/

//remover espaços 
function removeSpaces(text) {
    let log = text.trim();
    return log;
}

//capitalização correta: palavra antes dos dois pontos em CAPS, resto do texto minúsculo
function formatText(text) {
    let textSplitted = text.split(':');
    let firstPart = textSplitted[0].toUpperCase();
    let secondPart = textSplitted[1].toLowerCase()
    return `${firstPart}:${secondPart}`;
}

function cleanSystemLogs() {
    let logs = ['info: server started ', 'warning: slow query', 'ERROR: timeout', '   info: cache updated', 'warning: slow query '];
    logs.pop(); //remover último log duplicado

    let correctLogs = logs.map(newLog => {
        let logsNormalized = removeSpaces(newLog);
        logsNormalized = formatText(logsNormalized);
        return logsNormalized;
    })
    return correctLogs.join('\n');
}


const result = cleanSystemLogs();
console.log(`Result: \n${result}`);

console.assert(
    result ===
    `INFO: server started
WARNING: slow query
ERROR: timeout
INFO: cache updated`,
    '❌ A lista final de logs não está correta'
);