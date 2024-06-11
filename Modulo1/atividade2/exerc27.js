/*
Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz
multiplicados por A em um vetor V(36). Escrever o vetor V no final.
 */
const prompt = require('prompt-sync')();

function exercicio27(){
    console.clear();
    console.log("EXERCÍCIO 27:");
    console.log("-------------");

    const matrizM = [];
    const vetorV = [];
    
    function gerarMatriz(matriz, l, c){
        for (let i = 0; i < l; i++) {
            let row = [];
            for (let j = 0; j < c; j++) {
                  row.push(Math.floor(Math.random() * 10 + 1));
            }
            matriz.push(row);
        }
    }
    
    function multiplicarMatriz(){
        for(let i = 0; i < matrizM.length; i++){
            for(let j = 0; j < matrizM.length; j++){
                vetorV.push(matrizM[i][j] * multiplicador);
            }
        }
    }
    
    gerarMatriz(matrizM, 6, 6);
    
    let multiplicador = parseInt(prompt("Entre com o valor do multiplicador: "));
    
    if(Number.isInteger(multiplicador)){
        multiplicarMatriz();
    } else{
        console.log("Entrada inválida.")
    }
    
    
    console.log("");
    console.log("Matriz [6,6]:", matrizM);
    console.log("------------------------------------------");
    console.log("Vetor V:", vetorV);
    
}

module.exports = { exercicio27 };