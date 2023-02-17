async function buscaEndereco(cep) {
    let mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try {
        let consultCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultCEPConvertida = await consultCEP.json()
        if (consultCEPConvertida.erro) {
            throw Error('CEP não existe!')
        }
        let cidade = document.getElementById('cidade')
        let logradouro = document.getElementById('endereco')
        let estado = document.getElementById('estado')

        cidade.value = consultCEPConvertida.localidade
        logradouro.value = consultCEPConvertida.logradouro
        estado.value = consultCEPConvertida.uf

        console.log(consultCEPConvertida)
        return consultCEPConvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
}

let cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))