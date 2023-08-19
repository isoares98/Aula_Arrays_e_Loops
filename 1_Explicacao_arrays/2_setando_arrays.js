// como mudar informações de um array

const nomesDeEstudantes = [`jose`, `joao`, `maria`, `joana`, `andre`];
// inicialmente criamos um array, aqui temos 5 index/indece, sendo assim um array de tamanho = 6

// para modificar um array, fazemos igual quando queremos modificar uma variavel
// MAS ATENÇÃO quando utilizamos const para criação de uma array, podemos somente MODIFICAR e não atribuir uma nova referencia, como por exemplo utilizando LET

// COMO MODIFICAR UM ELEMENTO EXISTENTE:
nomesDeEstudantes[0] = `matheus`;
//console.log(nomesDeEstudantes[0]);

//ADICIONAR ELEMENTOS
nomesDeEstudantes.push(`fabricio`);
//console.log(nomesDeEstudantes); // ele imprimira [ 'matheus', 'joao', 'maria', 'joana', 'andre', 'fabricio' ]

//ADICIONAR UM ELEMENTO AO FINAL DE UM ARRAY, independente se mudamos o array diretamente no codigo manualmente.
nomesDeEstudantes[nomesDeEstudantes.length] = `pedro`;
console.log(nomesDeEstudantes);

// REMOVER O ultimo ELEMENTO
nomesDeEstudantes.pop();
//console.log(nomesDeEstudantes); // irá imprimir [ 'matheus', 'joao', 'maria', 'joana', 'andre' ]


// REMOVER ou editar um ou mais ELEMENTOS EM UM LUGAR OU QUANTIDADE ESPECIFICA

// UTILIZANDO PARA REMOVER
//splice(inicio: O índice onde a remoção ou substituição deve começar, quantidade: O número de elementos a serem removidos)
nomesDeEstudantes.splice(0, 3); // ou seja, a partir do jose, apague 3 indices
//console.log(nomesDeEstudantes); // ira imprimir [ 'joana', 'andre' ]

// UTILIZANDO PARA ADICIONAR
//splice(inicio: O índice onde a remoção ou substituição deve começar, quantidade: O número de elementos a serem removidos, elemento1, elemento2, ...: Os elementos que você deseja adicionar)
nomesDeEstudantes.splice(0, 0, 'matheus', 'joao', 'maria'); // ou seja, a partir do jose, apague 3 indices
//console.log(nomesDeEstudantes); // ira imprimir [ 'matheus', 'joao', 'maria', 'joana', 'andre' ]