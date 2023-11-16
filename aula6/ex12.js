let dados = prompt("Quantidade de dados:");
let lados = prompt("Quantidade de lados:");
let tentativas = prompt("Quantidade de Tentativas:");
let rolagens = [];
let cont = 1

while(cont<= tentativas){
    let soma = 0;
    console.log(cont)

    for (let i = 0; i < dados; i++) {
        let resultado = Math.floor(Math.random() * lados) + 1;
        rolagens.push(resultado);
        soma += resultado;
        console.log(`dado ${i+1}: ${resultado}`)    
    }

cont++;
    console.log(`Soma dos valores: ${soma}
    `);                                                                          
}
