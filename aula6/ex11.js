const dados = prompt("Quantidade de dados:");
const lados = prompt("Quantidade de lados:");
const rolagens = [];


let soma = 0;


for (let i = 0; i < dados; i++) {
    const resultado = Math.floor(Math.random() * lados) + 1;
    rolagens.push(resultado);
    soma += resultado;
    console.log(`dado ${i+1}: ${resultado}`)
}



console.log(`Soma dos valores: ${soma}`);                                                                               