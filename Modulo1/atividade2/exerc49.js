/*
Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria.
Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes aessa categoria.
Adicionalmente, inclua um subtotal de valores por categoria.

*/

const prompt = require('prompt-sync')();

function exercicio49(){
    console.clear();
    console.log("EXERCÍCIO 49:");
    console.log("-------------");

    let transacoes = [
        { id: 1, valor: 100, data: "2024-06-01", categoria: "Alimentação" },
        { id: 2, valor: 200, data: "2024-06-02", categoria: "Lazer" },
        { id: 3, valor: 150, data: "2024-06-03", categoria: "Alimentação" },
        { id: 4, valor: 50, data: "2024-06-04", categoria: "Transporte" },
        { id: 5, valor: 400, data: "2024-06-05", categoria: "Roupas" },
        { id: 6, valor: 300, data: "2024-06-06", categoria: "Lazer" },
        { id: 7, valor: 180, data: "2024-06-07", categoria: "Roupas" },
        { id: 8, valor: 30, data: "2024-06-08", categoria: "Transporte" }
    ];

    function somarCategoria(arrayObjetos) {
        const objeto = {}
    
        arrayObjetos.forEach(({ categoria, valor }) => {
          if (objeto[categoria]) {
            objeto[categoria] = [...objeto[categoria], valor]
            objeto[`subtotal_${categoria}`] += valor
          } else {
            objeto[categoria] = [valor]
            objeto[`subtotal_${categoria}`] = valor
          }
        })
    
        return object
      }
    
      const transactionsObject = somarCategoria(transacoes);
    
      console.log("");
      console.log("Objeto com as transações");
      console.table(transactionsObject);
      console.log("");
}

// exercicio49();

module.exports = { exercicio49 };