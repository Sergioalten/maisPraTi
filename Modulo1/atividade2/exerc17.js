/*
Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. 
No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.
 */
const prompt = require('prompt-sync')();

function exercicio17(){
    console.clear();
    console.log("EXERCÍCIO 17:");
    console.log("-------------");

    let qtdPessoas = 0;
    const nomes = [];
    const idades = [];
    
    function entradasDoUsuario(){
        do {
            let nome = prompt("Digite o nome da pessoa: ");
        
            let idade = parseInt(prompt("Digite a idade da pessoa: "));
        
            if(Number.isInteger(idade)){
                idades.push(idade);
                nomes.push(nome);
                qtdPessoas ++;
            } else {
                console.log("Entradas inválidas. Digite um valor numérico para a idade.")
            }
    
            console.log("---------------------------------");
        
        }while(qtdPessoas < 9);
    }
    
    function verificarIdade(){
        for(let i in idades){
            if(idades[i] < 18){
                console.log(`${nomes[i]} tem ${idades[i]} anos.`)
            }
        }
    }
    
    entradasDoUsuario();
    console.log("");
    console.log("Pessoas menores de idade:");
    verificarIdade();

}

module.exports = { exercicio17 };