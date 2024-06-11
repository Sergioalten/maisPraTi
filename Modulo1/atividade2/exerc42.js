/*
Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays.
Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.
*/

const prompt = require('prompt-sync')();

function exercicio42(){
    console.clear();
    console.log("EXERCÍCIO 42:");
    console.log("-------------");

    let dados = {
        nome: 'Sérgio',
        idade: 36,
        cidade: 'Porto Alegre',
        habilidades: ['JavaScript', 'Python', 'HTML', 'CSS', 'Java'],
    }

    function obterArray(objeto){
        const objetoNovo = {};

        for(i in dados){
            if(Array.isArray(objeto[i])) {
                objetoNovo[i] = objeto[i];
            }
        }
        return objetoNovo;
    }

    const objetoNovo = obterArray(dados);

    console.log();
    console.log(`Objeto original: ${JSON.stringify(dados)}`);
    console.log("--------------------------------------------");
    console.log("Novo objeto só contendo o array do objeto original:");
    console.log(`${JSON.stringify(objetoNovo)}`);
    console.log();

}

// exercicio42();

module.exports = { exercicio42 };