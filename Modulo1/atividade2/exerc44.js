/*
Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.
*/

const prompt = require('prompt-sync')();

function exercicio44(){
    console.clear();
    console.log("EXERCÍCIO 44:");
    console.log("-------------");

    function contarStrings(objeto){
        let contador = 0;

        for(let i in objeto){
            if(typeof objeto[i] === 'string'){
                contador++;
            }
        }
        return contador;
    }

    let pessoa = {
        nome: 'Sérgio',
        idade: 36,
        cidade: 'Porto Alegre',
        email: 'exemplo@email.com',
        anoNascimento: 1987,
        hobbies: ['Games', 'Rpg', 'Séries', 'Filmes'],
    }

    let qtdStrings = contarStrings(pessoa);

    console.log();
    console.log(`O objeto Pessoa tem: ${qtdStrings} strings.`)
    console.log("-----------------------------------------------");

}

// exercicio44();

module.exports = { exercicio44 };