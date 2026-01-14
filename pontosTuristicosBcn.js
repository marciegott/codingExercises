/* Você receberá um array no qual:
    - `0` significa que naquele km não há ponto turístico.
    - Uma `string` significa o nome do ponto turístico encontrado naquele km.
    
    O índice do array representa o km correspondente.
    - Exemplo: `const caminho = [0, “Rocafort”]`
    - saída esperada `km 01 - Rocafort`
*/
function coletarPontosTuristicos() {
    const caminho = [
        0,
        0,
        "Sagrada Família",
        0,
        0,
        0,
        "Casa Batlló",
        0,
        0,
        0,
        "Parc Güell",
        0,
        0,
        0,
        0,
        "La Rambla",
        0,
        0,
        "Camp Nou",
        0,
    ];

    const pontosT = [];

    for (let i = 0; i < caminho.length; i++) {
        if (caminho[i] !== 0) {
            const info = `km ${i + 1}: ${caminho[i]}`;
            pontosT.push(info);
        }
    }
    return pontosT; /* resultado final */;
}

const resultado = coletarPontosTuristicos();
const resultadoEsperado = [
    'km 3: Sagrada Família',
    'km 7: Casa Batlló',
    'km 11: Parc Güell',
    'km 16: La Rambla',
    'km 19: Camp Nou'];

console.assert(JSON.stringify(resultado) === JSON.stringify(resultadoEsperado),
    `Resultado esperado: ${JSON.stringify(resultadoEsperado)}, Resultado obtido: ${JSON.stringify(resultado)}`);