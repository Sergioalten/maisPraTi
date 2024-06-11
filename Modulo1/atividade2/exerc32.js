/*
Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha, 
e armazene ele em uma nova matriz.
Escrever a matriz lida e a modificada.
*/

function exercicio32(){
    console.clear();
    console.log("EXERCÍCIO 32:");
    console.log("-------------");

    const matrizM = [];
    const matrizModificada = [];
    const linhas = 12;
    const colunas = 13;
    
    function gerarMatriz(matriz, l, c){
        for (let i = 0; i < l; i++) {
            let row = [];
            for (let j = 0; j < c; j++) {
                  row.push(Math.floor(Math.random() * 30 + 1));
            }
            matriz.push(row);
        }
    }
    
    gerarMatriz(matrizM, linhas, colunas);
    
    for (let i = 0; i < linhas; i++) {
        matrizModificada.push([]);
        for (let j = 0; j < colunas; j++) {
            matrizModificada[i].push(matrizModificada[i][j]);
        }
    }
      
    for (let i = 0; i < linhas; i++) {
        let maiorModulo = Math.abs(matrizM[i][0]);
        for (let j = 1; j < colunas; j++) {
            if (Math.abs(matrizM[i][j]) > maiorModulo) {
                maiorModulo = Math.abs(matrizM[i][j]);
            }
        }
        for (let j = 0; j < colunas; j++) {
            matrizModificada[i][j] = (matrizM[i][j] / maiorModulo).toFixed(1);
        }
    }
    
    console.log("");  
    console.log("Matriz original:");
    console.log(matrizM);
    console.log("----------------------------------------------------------");
    console.log("Matriz Modificada:");
    console.log(matrizModificada);
    console.log("");
    
}

module.exports = { exercicio32 };