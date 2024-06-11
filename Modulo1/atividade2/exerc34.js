/*
Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. 
Mostre a matriz após as multiplicações.
 */

function exercicio34(){
    console.clear();
    console.log("EXERCÍCIO 34:");
    console.log("-------------");

    const matrizM = [];
    const matrizModificada = [];
    
    function gerarMatriz(matriz, l, c){
        for(let i = 0; i < l; i++){
            let row = [];
            for(let j = 0; j < c; j++){
                row.push(Math.floor(Math.random() * 10 + 1));
            }
            matriz.push(row);
        }
    }
    
    gerarMatriz(matrizM, 50, 50);
    
    for (let i = 0; i < matrizM.length; i++) {
        matrizModificada.push([]);
        let elementoDiagonalPrincipal = matrizM[i][i];
        for (let j = 0; j < matrizM.length; j++) {
            matrizModificada[i].push(matrizM[i][j] * elementoDiagonalPrincipal);
        }
    }
    
    console.log("\n");
      
    console.log("Matriz original:");
    console.log("----------------");
    for(let i = 0; i < matrizM.length; i++) {
        console.log(matrizM[i].join(' '));
    }
    
    console.log("");
    console.log("----------------------------------------------------------------------");
      
    console.log("Matriz Modificada:");
    console.log("------------------");
    for(let i = 0; i < matrizModificada.length; i++) {
        console.log(matrizModificada[i].join(' '));
    }
    
}

module.exports = { exercicio34 };