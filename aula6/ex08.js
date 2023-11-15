const palavra = prompt("Digite uma palavra:");


let vogais = 0;


for (let i = 0; i < palavra.length; i++) {
    
    let letra = palavra[i].toLowerCase();

    
    if (letra === 'a' || letra === 'ã' || letra === 'á' || letra === 'â' || letra === 'e' || letra === 'é' ||letra === 'ê' || letra === 'i' || letra === 'í' || letra === 'o' || letra === 'ô' ||letra === 'õ' || letra === 'ó' ||letra === 'ú' ||letra === 'u') {
        
        vogais++;
    }
}

console.log("A palavra '" + palavra + "' possui " + vogais + " vogais.");
