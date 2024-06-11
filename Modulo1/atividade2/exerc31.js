/*
Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. 
Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.
 */
const prompt = require('prompt-sync')();

function exercicio31(){
    console.clear();
    console.log("EXERCÍCIO 31:");
    console.log("-------------");

    let numA = 0;
    const matrizM = [];
    const matrizX = [];
    
    
    function validarNumero(){
        if((Number.isInteger(numA)) && (numA >= 1 && numA <= 30)){
            return false;
        } else{
            console.log("Entrada inválida");
            return true;
        }
    }
    
    function gerarMatriz(matriz, l, c){
        for (let i = 0; i < l; i++) {
            let row = [];
            for (let j = 0; j < c; j++) {
                  row.push(Math.floor(Math.random() * 30 + 1));
            }
            matriz.push(row);
        }
    }
    
    function operacoesMatiz(){
        let contIguais = 0;
        for(let i = 0; i < matrizM.length; i++){
            let linha = [];
            for(let j = 0; j < matrizM[i].length; j++){
                if(matrizM[i][j] === numA){
                    contIguais++;
                } else{
                    linha.push(matrizM[i][j])
                }
            }
            matrizX.push(linha);
        }
        console.log("");
        console.log(`A quantidade de valores iguais ao número digitado é: ${contIguais}`)
        console.log("------------------------------------------------------------");
        console.log("A matriz resultante dos números diferentes:");
        console.log(matrizX);
    
    }
    
    
    
    do{
        numA = parseInt(prompt("Entre com um número entre 1 e 30: "));
    
    }while(validarNumero());
    
    gerarMatriz(matrizM, 30, 30);
    
    console.log("");
    console.log("Matriz Original:");
    console.log(matrizM);
    operacoesMatiz();
    
}

module.exports = { exercicio31 };