/*
Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, 
retornando um novo objeto com os resultados.
*/

const prompt = require('prompt-sync')();

function exercicio47(){
    console.clear();
    console.log("EXERCÍCIO 47:");
    console.log("-------------");

    function transformarObjetos(objeto, funcao) {
        let novoObjeto = {};
    
        for (let propriedade in objeto) {
            novoObjeto[propriedade] = funcao(objeto[propriedade]);
        }
    
        return novoObjeto;
    }
    
    function dobrarValor(valor) {
        return valor * 2;
    }
    

    let objetoInicial = {
        a: 10,
        b: 20, 
        c: 30, 
        d: 40,
        e: 50
    }

    let objetoAlterado = transformarObjetos(objetoInicial, dobrarValor);

    console.log("");
    console.log("Objeto Inicial:");
    console.table(objetoInicial);
    console.log("-------------------------------------");
    console.log("Objeto Alterado:");
    console.table(objetoAlterado);
    console.log("");
}

// exercicio47();

module.exports = { exercicio47 };