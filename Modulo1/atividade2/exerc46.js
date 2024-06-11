/*
Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor.
Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor.
*/

const prompt = require('prompt-sync')();

function exercicio46(){
    console.clear();
    console.log("EXERCÍCIO 46:");
    console.log("-------------");

    function somatorioVendas(vendas){
        let resumoVendas = {};

        vendas.forEach(function({vendedor, valor}){
            if (resumoVendas[vendedor]){
                resumoVendas[vendedor] += valor;
            } else {
            resumoVendas[vendedor] = valor;
            }
        });

        return resumoVendas;
    }

    let vendas = [
        {vendedor: 'José', valor: 300}, 
        {vendedor: 'Maria', valor: 300},
        {vendedor: 'José', valor: 100},
        {vendedor: 'Maria', valor: 500},
        {vendedor: 'Ana', valor: 250},
        {vendedor: 'Ana', valor: 710},
    ]

    let totalVendas = somatorioVendas(vendas);

    console.log();
    console.log("Resumo das vendas por vendedor:");
    console.table(totalVendas);
    console.log("-------------------------------------------------")

}

// exercicio46();

module.exports = { exercicio46 };