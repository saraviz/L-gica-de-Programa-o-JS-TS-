const randomNumber = Math.floor(Math.random() * 100) + 1;

let num = 0;
let lim = 0;

while (lim<7) {
    
    num = Number(prompt("Adivinhe o número (entre 1 e 100):"));


    if (num< randomNumber) {
        alert("O número é maior.");
    } else if (num > randomNumber) {
        alert("O número é menor.");
    } else {
        alert(`Você adivinhou o número ${randomNumber} corretamente.`);
    }
    lim++

    if(lim ===7){
        alert(`Você não acertou, o número era ${randomNumber}`)
    }
}