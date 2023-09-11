import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin("João", "fon@gmail.con", "01/01/2000")

console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.criarCurso("JS", "10"))