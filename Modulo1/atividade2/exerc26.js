/*
Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].
 */

function exercicio26(){
    console.clear();
    console.log("EXERCÍCIO 26:");
    console.log("-------------");

    const matrizA = [];
    const matrizB = [];
    const matrizP = [];
    
    function gerarMatriz(matriz, l, c){
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 5; j++) {
                  row.push(Math.floor(Math.random() * 10 + 1));
            }
            matriz.push(row);
        }
    }
    
    function calcularMatrizProduto(matriz){
        for (let i = 0; i < 3; i++) {
            matriz[i] = [];
            for (let j = 0; j < 5; j++) {
                matriz[i][j] = matrizA[i][j] * matrizB[i][j];
            }
        }
    }
    
    function mostrarMatrizP(){
        console.log("Matriz Produto P:");
        for (let i = 0; i < 3; i++) {
            console.log(matrizP[i].join(" "));
        }
    }
    
    gerarMatriz(matrizA);
    gerarMatriz(matrizB);
    calcularMatrizProduto(matrizP);
    
    console.log("");
    console.log("Matriz A:", matrizA);
    console.log("-----------------------------------------------------------------------");
    console.log("Matriz B:", matrizB);
    console.log("-----------------------------------------------------------------------");
    mostrarMatrizP();
    console.log("");
    
}

module.exports = { exercicio26 };