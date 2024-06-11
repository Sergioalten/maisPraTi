/*
Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
    a) a soma dos elementos acima da diagonal principal;
    b) a soma dos elementos abaixo da diagonal principal;
 */

function exercicio28(){
    console.clear();
    console.log("EXERCÍCIO 28:");
    console.log("-------------");

    const matrizM = [];
    
    function gerarMatriz(matriz, l, c){
        for (let i = 0; i < l; i++) {
            let row = [];
            for (let j = 0; j < c; j++) {
                  row.push(Math.floor(Math.random() * 10 + 1));
            }
            matriz.push(row);
        }
    }
    
    function somaAcimaDiagonal(matriz) {
        let soma = 0;
        for (let i = 0; i < matriz.length; i++) {
            for (let j = i + 1; j < matriz[i].length; j++) {
                soma += matriz[i][j];
            }
        }
        return soma;
    }
      
    function somaAbaixoDiagonal(matriz) {
        let soma = 0;
        for (let i = 1; i < matriz.length; i++) {
            for (let j = 0; j < i; j++) {
                soma += matriz[i][j];
            }
        }
        return soma;
    }
    
    gerarMatriz(matrizM, 10, 10);
    
    console.log("");
    console.log("Matriz principal:");
    console.log(matrizM);
    
    console.log("-----------------------------------------------------------------");
    console.log(`Soma dos elementos acima da diagonal principal: ${somaAcimaDiagonal(matrizM)}`);
    console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixoDiagonal(matrizM)}`);
    
}

module.exports = { exercicio28 };