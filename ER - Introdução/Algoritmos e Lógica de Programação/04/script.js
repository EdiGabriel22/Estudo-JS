let student = prompt("Qual o nome do aluno?")

let n1 = prompt("Qual a nota da primeira prova")
let n2 = prompt("Qual a nota da segunda prova")
let n3 = prompt("Qual a nota da terceira prova")

let avarege = (Number(1) + Number(2) + Number(2)) / 3

let result = average > 6

avarege = average.toFixed(2)

if (result) {
    alert("Parabéns," + student + "! Sua média foi de:" + average)
}   else if (average < 3) {
    alert("Reprovado")
} else {
    alert(student + "estude para sua prova de recuperação! Sua média foi de:" + average)
}