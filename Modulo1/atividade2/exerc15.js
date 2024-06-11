/*
Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados 
e em que posições eles estão armazenados.
*/
const prompt = require('prompt-sync')();

function exercicio15(){
    console.clear();
    console.log("EXERCÍCIO 15:");
    console.log("------------");
    
    let numerosList = [];
    
    while(numerosList.length < 10){
        let numeroEntrada = parseInt(prompt("Digite um número inteiro: "));
    
        if(Number.isInteger(numeroEntrada)){
            numerosList.push(numeroEntrada);
        } else {
            console.log("Entrada inválida.");
        }
    }
    
    console.log("-------------------------------------\n")
    
    for(let i in numerosList){
        if(numerosList[i] % 2 === 0){
            console.log(`O número ${numerosList[i]} é par e está na posição ${i} da lista.`);
        }
    }
    
    
    console.log("-------------------------------------")
    console.log(`${numerosList}`);

}

module.exports = { exercicio15 };