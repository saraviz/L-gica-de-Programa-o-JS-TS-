const dados = prompt("Quantidade de dados:");
const rolagens = [];


let soma = 0;


for (let i = 0; i < dados; i++) {
    const resultado = Math.floor(Math.random() * 6) + 1;
    rolagens.push(resultado);
    soma += resultado;
}


console.log(`Rolagens individuais: ${rolagens.join(', ')}`);
console.log(`Soma dos valores: ${soma}`);                                                                               