/*
Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números 
gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
 */
const prompt = require('prompt-sync')();

function exercicio16(){
    console.clear();
    console.log("EXERCÍCIO 16:");
    console.log("------------");

    let vetorDesordenado = [];
    
    for (let i = 0; i < 20; i++){
        let numeroAleatorio = Math.floor(Math.random() * 100)
        vetorDesordenado.push(numeroAleatorio);
    }
    
    function ordenarVetor(vetor){
        let copiaVetor = vetor.slice();
        copiaVetor = copiaVetor.sort((a, b) => a - b)
        return copiaVetor;
    }
    
    const vetorOrdenado = ordenarVetor(vetorDesordenado);
    
    console.log("");
    console.log(`Vetor original: ${vetorDesordenado}`);
    console.log(`Vetor ordenado: ${vetorOrdenado}`);
    console.log("");

}

module.exports = { exercicio16 };