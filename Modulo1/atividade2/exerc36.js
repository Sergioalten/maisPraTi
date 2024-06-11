/*
Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva.
Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de acertos. 
Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR".
 */

function exercicio36(){
    console.clear();
    console.log("EXERCÍCIO 36:");
    console.log("-------------");

    function vencedor(gabarito) {
        const numeroDeApostadores = 100;
        const respostasDosApostadores = [];
    
        for (let i = 0; i < numeroDeApostadores; i++) {
            let numeroCartao = i + 1;
            let respostas = [];
    
            for (let j = 0; j < gabarito.length; j++) {
                respostas.push(Math.floor(Math.random() * 60) + 1);
            }
    
            respostasDosApostadores.push({ numeroCartao, respostas });
        }
    
        for (let apostador of respostasDosApostadores) {
            let acertos = 0;
            for (let k = 0; k < gabarito.length; k++) {
                if (apostador.respostas[k] === gabarito[k]) {
                    acertos++;
                }
            }
            console.log(`Apostador ${apostador.numeroCartao} teve ${acertos} acertos.`);
            if (acertos === 13) {
                console.log("Parabéns, tu foi o GANHADOR");
            }
        }
    }
    
    const gabarito = [];
    for(let i = 0; i < 13; i++){
        gabarito.push(Math.floor(Math.random() * 60) + 1);
    }
    
    console.log("");
    console.log("Gabarito: ", gabarito);
    console.log("---------------------");
    console.log("Resultado");
    console.log("---------");
    vencedor(gabarito);
    console.log("-------------------------------------");
    
}

module.exports = { exercicio36 };