import { conectaAPI } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscaVideo(evento) {
    evento.preventDefault()
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaAPI.buscaVideo(dadosDePesquisa)

    const lista = document.querySelector("[data-lista]")

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }
    
    busca.forEach(elemento => lista.appendChild(
        constroiCard(el.titulo, el.descricao, el.url, el.imagem))
    )

    if(busca.length == 0) {
        lista.innerHTML = `
            <h2 class="mensagem__titulo">Não existe videos com esse termo</h2>
        `
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

botaoDePesquisa.addEventListener("click", evento => buscaVideo(evento))