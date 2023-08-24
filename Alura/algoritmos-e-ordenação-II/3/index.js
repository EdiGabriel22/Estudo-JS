const listaLivros = require('./array')


function encontraMenores(pivo, array) {
    let menores = 0 
    for (let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual]
        if (produtoAtual.preco < pivo.preco) {
            menores++
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores)

    return array
}

function trocaLugar(array, de, para) {
    const el1 = array[de]
    const el2 = array[para]

    array[para] = el1
    array[de] = el2
}

function dividePivo(array) {
    let pivo = array[Math.floor(array.length / 2)]
    console.log(pivo)
    encontraMenores(pivo, array)
    let valoresmenores = 0

    for ( let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando]

        if(atual.preco <= pivo.preco && atual !== pivo) {
            trocaLugar(array, analisando, valoresmenores)
            valoresmenores++
        }
    }

    return array
}


// console.log(dividePivo(listaLivros))
// console.log(encontraMenores(listaLivros[2], listaLivros))

module.exports = trocaLugar