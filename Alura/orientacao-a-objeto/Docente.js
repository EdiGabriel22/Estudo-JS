import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso) {
        return `${estudante} aprovado(a) no curso ${curso}`
    }
}

const novoDocente = new Docente("João", "docente@gmail.com", "01/01/2000")

console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovarEstudante("Andre", "JS"))