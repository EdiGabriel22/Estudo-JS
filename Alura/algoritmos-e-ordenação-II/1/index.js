const { edGalho, edFolha } = require('./arrays')

function juntasListas(lista1, lista2) {
    let listaFinal = []
    let posiçãoAtualLista1 = 0
    let posiçãoAtualLista2 = 0
    let atual = 0

    while (posiçãoAtualLista1 < lista1.length && posiçãoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posiçãoAtualLista1]
        let produtoAtualLista2 = lista2[posiçãoAtualLista2]

        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1
            posiçãoAtualLista1++
        } else {
            listaFinal[atual] = produtoAtualLista2
            posiçãoAtualLista2++
        }

        atual++
    }

    while (posiçãoAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posiçãoAtualLista1]
        posiçãoAtualLista1++
        atual++
    }

    while (posiçãoAtualLista2 < lista2.length) {
        listaFinal[atual] = lista2[posiçãoAtualLista2]
        posiçãoAtualLista2++
        atual++
    }

    return listaFinal
}

console.log(juntasListas(edFolha, edGalho))