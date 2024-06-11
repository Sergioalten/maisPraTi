/*
Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M.
Escrever a matriz e os vetores criados.
 */

function exercicio30(){
    console.clear();
    console.log("EXERCÍCIO 30:");
    console.log("-------------");

    const matrizM = [];
    const vetorSL = [];
    const vetorSC = [];
    
    function gerarMatriz(matriz, l, c){
        for (let i = 0; i < l; i++) {
            let row = [];
            for (let j = 0; j < c; j++) {
                  row.push(Math.floor(Math.random() * 30 + 1));
            }
            matriz.push(row);
        }
    }
    
    function calcularSomas(matriz) {
        for (let i = 0; i < matriz.length; i++) {
            let somaLinha = 0;
            let somaColuna = 0;
            for (let j = 0; j < matriz[i].length; j++) {
                somaLinha += matriz[i][j];
                somaColuna += matriz[j][i];
            }
            vetorSL.push(somaLinha);
            vetorSC.push(somaColuna);
        }
    }
    
    gerarMatriz(matrizM, 5, 5);
    calcularSomas(matrizM);
    
    console.log("");
    console.log("-------------------------------------------------");
    console.log("Matriz principal");
    console.log(matrizM);
    console.log("");
    console.log(`Soma das linhas: ${vetorSL.join(", ")}`);
    console.log(`Soma das colunas: ${vetorSC.join(", ")}`);
    console.log("-------------------------------------------------");
    console.log("");
    
}

module.exports = { exercicio30 };