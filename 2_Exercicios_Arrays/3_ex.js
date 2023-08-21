//exercicio de soma de todos os numeros dentro de um array

const numerosParaSoma = [2, 4, 7, 8, 10, 40, 29, 78];

let soma = 0;

for (let i = 0; i < numerosParaSoma.length; i++) { // i = index, então se i for < ao tamanho do array, ele vai somar 1 no index e vai passar para a proxima variavel SOMA
    //sera executado para ir de 0 até o 7 index
    soma = soma + numerosParaSoma[i]; // em soma ele vai pegar o numero já existem e somar ao numero do dentro do index selecionado
    //podendo ser soma += numeros [1]
}

console.log(soma);