// Faça um programa que conte quantas letras A existem numa determinada palavra e imprima o resultado na tela

const palavra = `batata`; //3 letras A

let letrasAhTotal = 0;

for (let letra of palavra) {
    if (letra === `a`) {
        letrasAhTotal++;
    }
}
console.log(letrasAhTotal);