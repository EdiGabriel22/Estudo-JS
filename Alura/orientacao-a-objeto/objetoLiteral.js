const user = {
    nome: 'Gabriel',
    email: 'edigabrielcontato2hotmail.com',
    nascimento: '2002/02/22',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Edi',
    email: 'edigabrielcontato@gmail.com',
    role: 'admin',
    criarCurso: function() {
        console.log('Criando curso')
    }
}

Object.setPrototypeOf(admin, user)
admin.exibirInfos()
admin.criarCurso()