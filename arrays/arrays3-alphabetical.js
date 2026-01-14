/*Durante a revisão de SEO do **girls.blog.br**, o sistema exportou as tags de um post com alguns pequenos erros:

há inconsistências de capitalização (“Romance” vs “romance”), 
caracteres estranhos em algumas tags 
e uma única duplicata que ficou esquecida **só no final da lista**.

Seu trabalho é transformar essa lista “crua” em uma lista final limpa e padronizada, 
pronta para ser exibida no painel de edição do blog — tudo usando apenas os métodos 
básicos de array que você já conhece.
*/

//minúsculas
function capitalize(tag) {
    let textC = tag.toLowerCase();
    return textC;
}
//tirar os pontos de exclamação
function noSigns(tag) {
    let textnoSigns = tag.replaceAll('!', "");
    return textnoSigns;
}

//ordem alfabética
function alphabetical(tag) {
    let alphabetSort = tag.sort();
    return alphabetSort;
}

function cleanTagsForSEO() {
    let tags = ['Romance', 'livros', 'Ficcao', 'Leitura!!!', 'romance!!'];
    tags.pop(); //remover o último

    let newTags = tags.map(item => {
        let tagsNormalized = capitalize(item);
        tagsNormalized = noSigns(tagsNormalized);
        return tagsNormalized;
    })
    let tagsOrganized = alphabetical(newTags);
    return tagsOrganized.join(', ');
}


const result = cleanTagsForSEO();
console.log(result);

console.assert(
    result === 'ficcao, leitura, livros, romance',
    '❌ A lista final de tags não está correta'
);