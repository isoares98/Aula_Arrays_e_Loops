//Arrays permitem o armazenamento ordenado de dados semelhantes
//exeplo: em vez de utilizarmos variaveis comuns para declarar varios nomes:

//variavel comuns
const nome1 = "joao";
const nome2 = "guilherme";
const nome3 = "joaquim";

//utilizamos somente um array e declaramos todos:
const nomesDeEstudantes = [`jose`, `felipe`, `mariana`];
//Observe que para tornar uma variavel array usamos [ ]

// o que é um array?
// array em JavaScript pode ser comparado a uma coleção de itens, como uma lista de compras.
// É uma maneira de armazenar vários valores (como números, strings, objetos ou outros tipos de dados) em uma única estrutura de dados organizada.
// Cada valor é associado a uma posição específica dentro do array, que é chamada de "índice".

// index ou indice é a posição de cada item na lista, començando sempre em 0
// então consequentemente jose é 0, felipe 1 e mariana 2
// o tamanho desse array é 3

console.log(nomesDeEstudantes); // quando coloco o comando console.log ele retornará todos os nomes dentro do array

//para puxar um dado especifico dentro de um array temos que solicitar o index/indice desejado, como no exemplo abaixo
//lembrando que você precisa acrescentar [] e dentro dele o numero do index/indece que deseja
console.log(nomesDeEstudantes[0]);
console.log(nomesDeEstudantes[1]);
console.log(nomesDeEstudantes[2]);
console.log(nomesDeEstudantes[3]); //aqui ele imprimi undefined >> pois não tem nada definido no campo desejado

//Um array pode ser preechido igual uma variavel, utilizando number, strings e etc.
// Exemplo:

const notasEstudantes = [0, 1, 2, 3, 4, 5];
// oberseve que temos do 0 a 5 de index/indeces, mas o tamanho do array é 6
// dica: para descobrir o tamanho do array, é só somar +1 ao ultimo numero do index

console.log(notasEstudantes[0]); //observe que aqui estou chamando pelo index/indece e não pela nota em si.
console.log(notasEstudantes[1]);
console.log(notasEstudantes[2]);
console.log(notasEstudantes[3]);
console.log(notasEstudantes[4]);
console.log(notasEstudantes[5]);