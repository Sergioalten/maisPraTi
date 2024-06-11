/*
Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA 
e a soma entre todos os valores da sequência.
 */
const prompt = require('prompt-sync')();

function exercicio11(){
    console.clear();
    console.log("EXERCÍCIO 11:");
    console.log("------------");

    let primeiroTermo;
    let razaoPA;
    
    do {
        primeiroTermo = prompt('Digite o primeiro termo da PA: ');
    }while (!validarNumero(primeiroTermo));
    primeiroTermo = parseInt(primeiroTermo);
    
    do {
        razaoPA = prompt('Digite a razão da PA: ');
    }while (!validarNumero(razaoPA));
    razaoPA = parseInt(razaoPA);
    
    function validarNumero(entrada) {
        return !isNaN(entrada) && entrada.trim() !== '';
    }
    
    function calcularPA() {
        let pa = [];
        let soma = 0;
      
        for (let i = 0; i < 10; i++) {
            let termo = primeiroTermo + i * razaoPA;
            pa.push(termo);
            soma += termo;
        }
    
        console.log("\n-----------------------------------------------------\n");
        console.log(`Os 10 primeiros elementos da PA são:${pa.join(', ')}`);
        console.log(`A soma dos elementos da PA é: ${soma}\n`);
    }
    
    calcularPA();

}

module.exports = { exercicio11 };