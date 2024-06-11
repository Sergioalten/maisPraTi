/*
Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.
*/

const prompt = require('prompt-sync')();

function exercicio4(){
    console.clear();
    console.log("EXERCÍCIO 4:");
    console.log("------------");

    let a = parseInt(prompt("Digite o primeiro valor: "));
    let b = parseInt(prompt("Digite o segundo valor: "));
    let c = parseInt(prompt("Digite o terceiro valor: "));
    
    let isTriangle = a < b + c && b < a + c && c < a + b;
    
    if (isTriangle) {
        console.log(`Estes valores formam um triângulo!`);
    } else {
        console.log(`Estes valores não formam um triângulo!`);
    }
    
}


module.exports = { exercicio4 };