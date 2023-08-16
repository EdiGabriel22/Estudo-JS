const listaLivros = require('./array')


function encontramenores(pivo, array) {
    let menores = 0 
    for (let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual]
        if (produtoAtual.preco < pivo.preco) {
            menores++
        }
    }

    return menores
}

function trocaLugar(array, de, para) {
    const el1 = array[de]
    const el2 = array[para]

    array[para] = el1
    array[de] = el2
}

console.log(encontramenores(listaLivros[2], listaLivros))