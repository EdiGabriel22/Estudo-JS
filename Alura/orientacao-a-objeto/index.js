import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("João", "joao@gmail.com", "01/01/2000")
console.log(novoUser.exibirInfos())

const novoAdmin = new Admin("Maria", "r@r.com", "01/01/2000")
console.log(novoAdmin.exibirInfos)

const novoDocente = new Docente("José", "g@g.com", "01/01/2000")
console.log(novoDocente.exibirInfos())