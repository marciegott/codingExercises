/*
Você recebeu a rota da página como um array bruto, diretamente da URL, e precisa transformá-lo em um 
breadcrumb legível para humanos. Seu objetivo é usar métodos de arrays e manipulação básica de strings para 
converter esse caminho técnico em um texto elegante como o que aparece nos blogs:

`Home > Categoria > Romance contemporaneo > Como se apaixonar.`
}

 */

function generateBreadcrumbs() {
    let path = ['home', 'blog', 'romance-contemporaneo', 'como-se-apaixonar'];
    let newPath = path.map(elemento => {
        //primeiro pegando a maiúscula
        const firstLetter = elemento.at(0).toUpperCase();
        const restOfTheText = elemento.slice(1);
        let fullText = (firstLetter + restOfTheText).replaceAll("-", " ");
        return fullText;
    })
    const indexBlog = newPath.indexOf('Blog');
    const finalBreadScrumbs = newPath.splice(indexBlog, 1, 'Categoria');
    return newPath.join(' > ');

}

const result = generateBreadcrumbs();
console.log(result);
console.assert(
    result === 'Home > Categoria > Romance contemporaneo > Como se apaixonar',
    '❌ O breadcrumb não está correto'
);