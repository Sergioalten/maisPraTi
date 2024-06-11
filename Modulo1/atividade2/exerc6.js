/*
Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.
*/
const prompt = require('prompt-sync')();

function exercicio6(){
    console.clear();
    console.log("EXERCÍCIO 6:");
    console.log("------------");

    const numeroCorreto = Math.floor(Math.random() * 5 + 1);
    let tentativa;
    
    do {
        tentativa = parseInt(prompt("Adivinhe o número entre 1 e 5: "));
        if (tentativa < numeroCorreto) {
            console.log("Tente um número maior");
        } else if (tentativa > numeroCorreto){
            console.log("Tente um número menor.");
        }
    }while( tentativa !== numeroCorreto)
    
    console.log("Parabéns! Você acertou.");
    console.log(`O número correto era ${numeroCorreto}`);

}

module.exports = { exercicio6 };
