/*
Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.
*/

const prompt = require('prompt-sync')();

function exercicio45(){
    console.clear();
    console.log("EXERCÍCIO 45:");
    console.log("-------------");
    
    function contarStrings(array){
        let contador = {};

        array.forEach(function(string){
            if (contador[string]){
                contador[string]++;
            } else{
                contador[string] = 1;
            }
        })

        return contador;
    }
        
        
    let meuArray = ['Bola', 'Bicicleta', 'Livro', 'Bicicleta', 'Notebook', 'Bola', 'Mesa', 'Notebook', 'Bicicleta', 'Bola',
        'Cadeira', 'Livro', 'Bola', 'Computador', 'Mesa', 'Notebook', 'Computador',]

    let meuObjeto = contarStrings(meuArray);

    console.log();
    console.log("Objeto com a contagem das strings:");
    console.table(meuObjeto);
    console.log("-------------------------------------------------");

}

// exercicio45();

module.exports = { exercicio45 };