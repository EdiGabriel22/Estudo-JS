let result = prompt("adivinhe o número que estou pensando? está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 0;

while(Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente")
    xAttempts++
}

alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`)