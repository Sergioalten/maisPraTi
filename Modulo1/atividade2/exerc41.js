/*
Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. 
Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.
*/

const prompt = require('prompt-sync')();

function exercicio41(){
    console.clear();
    console.log("EXERCÍCIO 41:");
    console.log("-------------");

    let pessoa = {
        nome: 'Sérgio',
        idade: 36,
    }

    console.log(`${pessoa.nome} tem ${pessoa.idade} anos.`);

    console.log("--------------------------------------------");

    pessoa.email = "emaildosergio@email.com";

    console.log(`O email do ${pessoa.nome} é: ${pessoa.email}`);

    console.log(`Objeto pessoa: ${JSON.stringify(pessoa)}`);

    console.log("--------------------------------------------");
    
}

// exercicio41();

module.exports = { exercicio41 };