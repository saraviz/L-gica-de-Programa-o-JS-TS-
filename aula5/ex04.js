
const randomNumber = Math.floor(Math.random() * 100) + 1;

let num = 0;

while (num !== randomNumber) {
    
    num = Number(prompt("Adivinhe o número (entre 1 e 100):"));


    if (num< randomNumber) {
        alert("O número é maior.");
    } else if (num > randomNumber) {
        alert("O número é menor.");
    } else {
        alert(`Você adivinhou o número ${randomNumber} corretamente.`);
    }
}