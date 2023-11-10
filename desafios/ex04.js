const l1 = 5;
const l2 = 4;
const l3 = 7;

if (l1 === l2 && l2 === l3) {
    console.log("É um triângulo equilátero.");
} else if (l1 === l2 || l1 === l3 || l2 === l3) {
    console.log("É um triângulo isósceles.");
} else {
    console.log("É um triângulo escaleno.");
}