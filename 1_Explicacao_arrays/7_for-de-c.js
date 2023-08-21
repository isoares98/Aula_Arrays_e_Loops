//extrutura de repetições

const nomesEstudantes = [`jose`, `joao`, `maria`, `joana`, `andre`];

for (let i = 0; i < 5; i++) { //primeiramente você declara a variavel index, depois você declara o tamanho do array
    console.log(nomesEstudantes[i]); // o codigo imprimi o que esta declarado no index do array
    // depois o codigo adiciona mais um no numero do array e volta para a parte de i < tamanho do array
}

// let index = 0; // antes do looping

// while (index < nomesEstudantes.length) { //enquanto
//     console.log(nomesEstudantes[index]);
//     index++;
// }


//USANDO length para não precisar ficar atualizando o tamanho do array

//for de c
for (let i = 0; i < nomesEstudantes.length; i++) {
    console.log(nomesEstudantes[i]);
}

//while
let index = 0; // antes do looping

while (index < nomesEstudantes.length) {
    console.log(nomesEstudantes[index]);
    index++;
}