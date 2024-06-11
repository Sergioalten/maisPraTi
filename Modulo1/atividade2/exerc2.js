/*Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Kmh-1, exiba uma mensagem dizendo que o usuário foi multado. 
Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
 */
const prompt = require('prompt-sync')();

function exercicio2(){
    console.clear();
    console.log("EXERCÍCIO 2:");
    console.log("------------");

    console.log("Qual a velocidade do carro?");
    let velocidade = parseInt(prompt());
    
    if (velocidade > 80) {
        const quilometrosAMais = velocidade - 80;
        let valorDaMulta = quilometrosAMais * 5;
        console.log(`Você ultrapassou o limite de velocidade de 80KM/H. Você terá que pagar uma multa de R$ ${valorDaMulta.toFixed(2)}`);
    } else {
        console.log(`Sua velocidade está dentro do permitido. Muito bem!`);
    }
    
}
// exercicio2();

module.exports = { exercicio2 };