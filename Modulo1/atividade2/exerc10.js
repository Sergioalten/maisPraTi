/**
 Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. 
 No final, mostre na tela:
    a) O somatório entre todos os valores;
    b) Qual foi o menor valor digitado;
    c) A média entre todos os valores;
    d) Quantos valores são pares.
 */
const prompt = require('prompt-sync')();

function exercicio10(){
    console.clear();
    console.log("EXERCÍCIO 10:");
    console.log("------------");

    const listnumeros = [];
    let numero = 0;
    let controle;
    
    function programaPrincipal(){
        do{
            numero = parseFloat(prompt("Digite um valor: "));
    
            if(isNaN(numero)){
                console.log("Entrada inválida");
                console.log("Digite um valor numérico.")
                verificador = 1;
            } else {
                listnumeros.push(numero);
    
                console.log("Deseja continuar?");
                controle = parseInt(prompt("Digite: 1 - Sim || 2 - Não  "));
            }
        
        }while(controle === 1);
    }
    
    function calcularTotal(vetor){
        let totalValores = 0;
        for(let i = 0; i < vetor.length; i++){
            totalValores += vetor[i];
        }
        return totalValores;
    }
    
    function encontrarMenor(vetor){
        let menorNumero = vetor[0];
        
        for (let i = 1; i < vetor.length; i++) {
            if (vetor[i] < menorNumero) {
                menorNumero = vetor[i];
            }
        }
    
        return menorNumero;
    }
    
    function encontrarMaior(vetor) {
        let maiorNumero = vetor[0];
        
        for (let i = 1; i < vetor.length; i++) {
            if (vetor[i] > maiorNumero) {
                maiorNumero = vetor[i];
            }
        }
    
        return maiorNumero;
    }
    
    
    
    programaPrincipal();
    console.clear()
    console.log("RESULTADO")
    console.log("\n----------------------------------------------------------\n")
    
    console.log('O somatório dos valores é: ' + calcularTotal(listnumeros));
    console.log("---------------------------------------------");
    console.log('O menor valor digitado foi: ' + encontrarMenor(listnumeros));
    console.log("---------------------------------------------");
    console.log('O maior valor digitado foi: ' + encontrarMaior(listnumeros));
    
    console.log("\n----------------------------------------------------------\n")
    console.log("Programa Finalizado!!")
    console.log("Obrigado pela preferência.")

}

module.exports = { exercicio10 };