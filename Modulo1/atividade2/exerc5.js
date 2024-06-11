/*
Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
*/
const prompt = require('prompt-sync')();

function exercicio5(){
    console.clear();
    console.log("EXERCÍCIO 5:");
    console.log("------------");

    function jogarJoKenPo() {
        const opcoes = ['pedra', 'papel', 'tesoura'];
        const escolhaUsuario = prompt('Escolha Pedra, Papel ou Tesoura: ').trim().toLowerCase();
    
        if (!opcoes.includes(escolhaUsuario)) {
            console.log('Escolha inválida. Por favor, escolha Pedra, Papel ou Tesoura.');
            return;
        }
    
        const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    
        console.log('Você escolheu: ' + escolhaUsuario + '\nO computador escolheu: ' + escolhaComputador);
    
        if (escolhaUsuario === escolhaComputador) {
            console.log('Empate!');
        } else if (
            (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
            (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
            (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
        ) {
            console.log('Você ganhou!');
        } else {
            console.log('Você perdeu!');
        }
    }
    
    console.log("Jogo JokenPo");
    
    let iniciaJogo;
    do {
        iniciaJogo = prompt("Deseja iniciar o jogo? Sim - Não: ").trim().toLowerCase();
        if (iniciaJogo === "sim"){
            console.clear();
            jogarJoKenPo();
        }
    } while(iniciaJogo === "sim");
    
    
    console.clear();
    console.log("Jogo encerrado!");
    
}


module.exports = { exercicio5 };