import chalk from "chalk"
import fs from "fs"
import pegaArquivo from "./index.js"
import listaValidada from "./http-validação.js"

const caminho = process.argv

function imprimeLista(valida, resultado, identificador = '') {

    if(valida) {
        resultado = listaValidada(resultado)
        console.log(
            chalk.yellow("Lista validada"),
            chalk.blue(identificador),
            listaValidada(resultado))
    } else {
        console.log(
            chalk.yellow("Lista de links"),
            chalk.blue(identificador),
            resultado)
    }

}

async function processatexto(argumentos) {
    const caminho = argumentos[2]
    const valida = argumentos[3] === '--valida'

    try {
        fs.lstatSync(caminho)
    } catch(erro) {
        if (erro.code === "ENOENT") {
            console.log(chalk.red.bold("Arquivo ou diretório não encontrado"))
            return
        }
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumentos[2])
        imprimeLista(valida, resultado)
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.readdirSync(caminho)
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(valida, lista, nomeDeArquivo)
        })
    }

}

processatexto(caminho)