/*
O girls.blog.br está revisando uma lista de palavras-chave usadas para sugerir conteúdos aos leitores.
Mas algumas palavras não são adequadas para aparecer na homepage porque são muito genéricas ou não têm relação com os temas principais do blog.
Você recebeu uma lista de palavras “cruas”, e precisa retornar **somente as palavras permitidas**, usando exclusivamente o método **filter()**.

As palavras permitidas são:

- **romance**
- **ficcao**
- **contemporaneo**

Seu objetivo é retornar um novo array contendo apenas as palavras válidas. */

// filtros.js
const allowedWords = ['romance', 'ficcao', 'contemporaneo'];
function filterOnlyAllowedWords(word) {
    return allowedWords.includes(word);
}




function filterKeywords() {
    let words = ['romance', 'fantasia', 'ficcao', 'terror', 'contemporaneo', 'mitologia'];
    let checkingWords = words.filter(filterOnlyAllowedWords)

    return checkingWords;
}


const result = filterKeywords();
console.log(result);

console.assert(
    JSON.stringify(result) === JSON.stringify(['romance', 'ficcao', 'contemporaneo']),
    '❌ O filtro de palavras não está correto'
);
