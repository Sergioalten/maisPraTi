/*
Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente.
*/

function exercicio25(){
    console.clear();
    console.log("EXERCÍCIO 25:");
    console.log("-------------");

    let matriz = [];
    
    for (let i = 0; i < 15; i++) {
        let row = [];
        for (let j = 0; j < 20; j++) {
              row.push(Math.floor(Math.random() * 20 + 1));
        }
        matriz.push(row);
    }
    
    console.log(matriz)
    
    
    let somas = [];
    
    for (let i = 0; i < 20; i++) {
        let somaColuna = 0;
        for (let j = 0; j < 15; j++) {
            somaColuna += matriz[j][i];
        }
        somas.push(somaColuna);
    }
    
    for (let j = 0; j < 20; j++) {
        console.log(`Soma da coluna ${j + 1}: ${somas[j]}`);
    }
    
    console.log("");
    console.log("------------------------------------------------------");
    console.log("");
    
}

module.exports = { exercicio25 };