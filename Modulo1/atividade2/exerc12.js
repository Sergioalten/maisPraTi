/*
Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

F(n)=F(n−1)+F(n−2)
 */
console.clear();

function exercicio12(){
    console.clear();
    console.log("EXERCÍCIO 12:");
    console.log("------------");

    function fibonacci(n) {
        if (n === 0 || n === 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
    
    for (let i = 1; i <= 10; i++) {
        console.log(fibonacci(i));
    }

}

module.exports = { exercicio12 };