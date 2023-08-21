const palavra = `Alemanha`;

let encontrado = false;

for (let letra of palavra) {
    if (letra === `h`) {
        console.log(`tem a letra h`);
        encontrado = true;
        break;
    } // não é necessario colocar ELSE
}

if (!encontrado) {
    console.log(`não tem H`);
}
