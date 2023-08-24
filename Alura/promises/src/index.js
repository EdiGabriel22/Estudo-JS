import fs from "fs";
import chalk from "chalk";

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm
    const capturas = [...texto.matchAll(regex)]
    const resultados = capturas.map((captura) => ({[captura[1]]: captura[2]}))
    return resultados.length ? resultados : chalk.red.bold("Não foram encontrados links no arquivo")
}

function trataErro(erro) {
    throw new Error(chalk.red.bold(erro));
}

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = "utf-8"
        const conteudo = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(conteudo)
    } catch (erro) {
        trataErro(erro)
    }
}

export default pegaArquivo;