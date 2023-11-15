let array = [40, 100, 1, 5, 25, 10];
let arrayCopia = [...array];

const compararNumeros = function (a, b) {
    return a - b;
};

const arrayOrdenado = arrayCopia.sort(compararNumeros);

console.log("Array original:", array);
console.log("Array ordenado:", arrayOrdenado);