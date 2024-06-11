/*
Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
    a) da linha 4 de M;
    b) da coluna 2 de M;
    c) da diagonal principal;
    d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
 */

function exercicio29(){
    console.clear();
    console.log("EXERCÍCIO 29:");
    console.log("-------------");

    const matrizM = [];
    let somaLinha4 = 0;
    let somaColuna2 = 0;
    let somaDiagonalPrincipal = 0;
    let somaTotal = 0;
    
    function gerarMatriz(matriz, l, c){
        for (let i = 0; i < l; i++) {
            let row = [];
            for (let j = 0; j < c; j++) {
                  row.push(Math.floor(Math.random() * 10 + 1));
            }
            matriz.push(row);
        }
    }
    
    gerarMatriz(matrizM, 5, 5);
    
    for(let i = 0; i < 5; i++){
        somaLinha4 += matrizM[3][i];
    }
    
    for(let j = 0; j < 5; j++){
        somaColuna2 += matrizM[j][1];
    }
    
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            if(i === j){
                somaDiagonalPrincipal += matrizM[i][j];
            }
        }
    }
    
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            somaTotal += matrizM[i][j];
        }
    }
    
    console.log("");
    console.log("Matriz Principal:");
    console.log(matrizM);
    
    console.log("---------------------------------------------------");
    console.log("Somas:");
    console.log(`Soma linha 4: ${somaLinha4}`);
    console.log("");
    console.log(`Soma coluna 2: ${somaColuna2}`);
    console.log("");
    console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`);
    console.log("");
    console.log(`Soma total da matriz: ${somaTotal}`);
    console.log("");
    
}

module.exports = { exercicio29 };