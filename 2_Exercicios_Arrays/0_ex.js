const nomesDePaises = [`Alemanha`, `França`, `Peru`, `Equador`, `Brasil`];

//Adicione um ao fim da lista
nomesDePaises[nomesDePaises.length] = `Bolivia`;
//Imprima
console.log(nomesDePaises);

//Remova do final da lista
nomesDePaises.pop();
//Imprima
console.log(nomesDePaises);

//Adicione no começo da lista
nomesDePaises.unshift(`Canadá`);
//imprima
console.log(nomesDePaises);

//Remova do começo da lista
nomesDePaises.shift();
//imprima
console.log(nomesDePaises);

//imprima o tamanho do array **bonus**
console.log(nomesDePaises.length);

//imprima o ultimo pais da lista
//primeiro jeito:
const ultimo = nomesDePaises[nomesDePaises.length - 1];
console.log(ultimo);

//segundo jeito, como eu imprimi o tamanho do array, eu pedi para imprimir o numero anterior ao tamanho.
console.log(nomesDePaises[4]);

//imprima o segundo pais da lista
console.log(nomesDePaises[1]);

//imprima o pais de index 2
console.log(nomesDePaises[2]);

