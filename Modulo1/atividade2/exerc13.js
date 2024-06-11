/*
Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico 
com 15 posições com os primeiros elementos da sequência de Fibonacci.
*/
console.clear();

function exercicio13(){
    console.clear();
    console.log("EXERCÍCIO 13:");
    console.log("------------");

    function fibonacci(n) {
        if (n === 0 || n === 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
      
    
    const fibonacciSequence = [];
    
    
    for (let i = 0; i < 15; i++) {
        fibonacciSequence.push(fibonacci(i));
    }
      
    console.log(`${fibonacciSequence}`);
 
}

module.exports = { exercicio13 };