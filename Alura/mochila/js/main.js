const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")


form.addEventListener( (evento) => {
    evento.preventDefault()

    criarElemento( evento.target.elements['nome'].value, evento.target.elements['nome'].value )
})

function criarElemento( nome, quantidade ) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild = numeroItem + nome
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)
}