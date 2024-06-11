/*
Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto.
A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas.
Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial.
(Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)
 */

function exercicio40(){
    console.clear();
    console.log("EXERCÍCIO 40:");
    console.log("-------------");

    function compararAposta(resultadoOficial, aposta) {
        for (let i = 0; i < resultadoOficial.length; i++) {
            if (resultadoOficial[i] !== aposta[i]) {
                return false;  
            }
        }
        return true;      
    }
    
    let resultadoOficial = [10, 20, 30, 40, 50]; 
    
    let apostas = [[10, 3, 30, 40, 2],[5, 4, 34, 12, 29], [10, 20, 30, 40, 50]];
    
    let ganhou = false;
    
    for (let i = 0; i < apostas.length; i++) {
        if (compararAposta(resultadoOficial, apostas[i])) {
            ganhou = true;
            break;
        }
    }
    
    if (ganhou) {
        console.log("Ganhador");
    } else {
        console.log("Não houve ganhador");
    }
    
}
// exercicio40();

module.exports = { exercicio40 };