//extrutura de repetições

const nomesEstudantes = [`jose`, `joao`, `maria`, `joana`, `andre`];

//em vez de solicitar um index de cada vez
console.log(nomesEstudantes[0]);
console.log(nomesEstudantes[1]);
console.log(nomesEstudantes[2]);
console.log(nomesEstudantes[3]);

//vamos utilizar uma variavel e criar uma extrutura de repetição
let index = 0;

console.log(nomesEstudantes[index]);
index++;

//utilizaremos o while (que significa enquanto)

while (index < nomesEstudantes.length) { // ou seja, enquanto index for MENOR que o tamanho do aaray, ele irá imprimir
    console.log(nomesEstudantes[index]);
    index++; //vai continuar executando o codigo até dar falso
}
