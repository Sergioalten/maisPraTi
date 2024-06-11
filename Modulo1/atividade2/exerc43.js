/*
Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 
têm precedência sobre as do obj1 em caso de conflitos.
*/

const prompt = require('prompt-sync')();

function exercicio43(){
    console.clear();
    console.log("EXERCÍCIO 43:");
    console.log("-------------");

    function combinarObjetos(obj1, obj2){
        let novoObjeto = {};

        for(let i in obj1){
            novoObjeto[i] = obj1[i];
        }

        for(let i in obj2){
            novoObjeto[i] = obj2[i];
        }

        return novoObjeto;
    }

    const obj1 = {
        nome: 'Sérgio',
        idade: 36,
        estado: 'Rio Grande do Sul',
        pais: 'Brasil',
    }

    const obj2 = {
        idade: 31,
        estado: 'São Paulo',
    }

    let objetoCombinado = combinarObjetos(obj1, obj2);

    console.log(`Objeto 1: ${JSON.stringify(obj1)}`);
    console.log();
    console.log(`Objeto 2: ${JSON.stringify(obj2)}`);
    console.log("---------------------------------------------------------");
    console.log(`Novo objeto combinado: ${JSON.stringify(objetoCombinado)}`);
    console.log("---------------------------------------------------------");

}

// exercicio43();

module.exports = { exercicio43 };