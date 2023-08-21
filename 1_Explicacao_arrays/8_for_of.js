// Utilização for of
// FOR (let|item TERÁ O NUMERO DE CADA ITEM DO ARRAY, of|array){ 
//codigo entre as chavez se repetirá uma vez para cada item dentro do array
//}

//CODIGO
// for (let nome, of nomes){
//     console.log(nome);
// }

const nomes = [`josé`, `joao`, `maria`, `joana`, `andre`];

for (let nome of nomes) {
    console.log(nome);
}