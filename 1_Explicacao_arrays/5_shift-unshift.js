// como adicionar ou retirar alguma coisa do COMEÇO de um array

const nomesDeEstudantes = [`jose`, `joao`, `maria`, `joana`, `andre`];

//ADICIONAR ao inicio
nomesDeEstudantes.unshift(`mariana`);
console.log(nomesDeEstudantes);

//RETIRAR do inicio
nomesDeEstudantes.shift();
console.log(nomesDeEstudantes);
