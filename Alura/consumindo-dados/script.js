async function buscaEndereco() {
    var consultCEP = await fetch('https://viacep.com.br/ws/01001000/json/')
    var consultCEPConvertida = await consultCEP.json()
    console.log(consultCEPConvertida)
}

                    

buscaEndereco();