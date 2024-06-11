/*
Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km.
Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.
*/
const prompt = require('prompt-sync')();

function exercicio3(){
    console.clear();
    console.log("EXERCÍCIO 3:");
    console.log("------------");

    let distancia = parseInt(prompt("Qual a distância que deseja percorrer em Km? "));
    
    if (distancia <= 200) {
        const valor = distancia * 0.5;
        console.log(`O valor cobrado será R$ ${valor.toFixed(2)}`);
    } else {
        const valor = distancia * 0.45;
        console.log(`O valor cobrado será R$ ${valor.toFixed(2)}`);
    }
    
}
// exercicio3();

module.exports = { exercicio3 };