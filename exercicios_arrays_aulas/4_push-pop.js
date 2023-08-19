//como adicionar ou retirar alguma coisa no final de um array

const nomesDeEstudantes = [`jose`, `joao`, `maria`, `joana`, `andre`];

//ambos comandos abaixo são utilizados para adicionar alguma coisa no final da array
nomesDeEstudantes.push(`pedro`);
nomesDeEstudantes[nomesDeEstudantes.length] = `pedro`;

//para retirar é usado o comando .pop
nomesDeEstudantes.pop(); //vem tirando do final do array para o começo.