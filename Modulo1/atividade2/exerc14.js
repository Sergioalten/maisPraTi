/*
Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados,
na ordem inversa daquela em que eles foram informados.
 */
const prompt = require('prompt-sync')();

function exercicio14(){
   console.clear();
   console.log("EXERCÍCIO 14:");
   console.log("------------");

   let nomes = [];
   let nome = [];
   
    for(let i = 0; i < 7; i++){
       nome = prompt("Digite um nome: ");
       nomes.push(nome);
    }
   
   console.log("---------------------------------\n")
   console.log(`Ordem inserida: ${nomes}`);
   console.log(`Ordem Reversa: ${nomes.reverse()}`);

}

module.exports = { exercicio14 };