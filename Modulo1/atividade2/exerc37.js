/*
Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. 
A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. 
Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”, caso contrário.
 */
const prompt = require('prompt-sync')();

function exercicio37(){
    console.clear();
    console.log("EXERCÍCIO 37:");
    console.log("-------------");

    /*Se quiser testar de forma automática, descomentar a chamada da função exercicio37(); substitua as variáveis passadas como parêmtro na função 
    corrigirProvas e comente as chamadas das funções armazenarGabarito() e  armazenarRespostasAlunos();
    */
    
    const gabaritoPronto = ["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "e", "d"];
    
    let respostasProntas = [["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "e", "d"],
    ["a", "a", "b", "b", "c", "c", "d", "d", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "e", "d"],
    ["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "e", "d"],
    ["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "e", "d"],
    ["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "e", "d"],
    ["d", "c", "c", "d", "e", "a", "a", "c", "e", "b", "e", "d", "b", "a", "e", "a", "b", "a", "a", "d"],
    ["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "e", "d"],
    ["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "e", "d"],
    ["c", "b", "c", "d", "e", "c", "a", "c", "c", "b", "a", "d", "b", "d", "e", "a", "c", "c", "e", "d"],
    ["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "e", "d"],
    ["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "e", "d"],
    ["d", "b", "c", "d", "d", "a", "a", "c", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "e", "d"],
    ["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "d", "d"],
    ["a", "b", "c", "d", "e", "b", "a", "c", "d", "b", "e", "d", "b", "d", "e", "a", "b", "c", "e", "d"],
    ["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "e", "d"],
    ["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "d", "b", "d", "a", "a", "b", "c", "e", "d"],
    ["c", "c", "c", "d", "e", "c", "a", "c", "c", "b", "e", "d", "b", "d", "e", "d", "b", "c", "e", "d"],
    ["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "a", "a"],
    ["a", "b", "c", "d", "e", "a", "a", "c", "c", "b", "e", "d", "b", "d", "e", "a", "b", "c", "e", "d"],
    ["e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "d", "e", "a", "b", "c", "e", "d"],];
    
    
    const gabarito = [];
    let respostasAlunos = [];
    
    function corrigirProvas(gabarito, respostasAlunos){
        for(let i = 0; i < respostasAlunos.length; i++){
            let respostas = respostasAlunos[i];
            let acertos = 0;
    
            for(let j = 0; j < gabarito.length; j++){
                if (respostas[j] === gabarito[j]){
                    acertos++;
                }
            }
    
            console.log(`Aluno ${i + 1} teve ${acertos} acertos.`);
            if(acertos >= 12 ){
                console.log(`Aluno ${i + 1} APROVADO`);
                console.log("-----------------------")
            }else {
                console.log(`Aluno ${i + 1} REPROVADO`);
                console.log("------------------------")
            }
        }
    }
    
    function armazenarGabarito(){
        console.log("Entre com as respostas do gabarito.")
        let contador = 1;
        while (gabarito.length < 20) {
            console.log(`Entre com a ${contador}ª resposta: Uma letra entre "a" e "e"`);
            let entradaGabarito = prompt().toLowerCase();
          
            if (entradaGabarito == "a" || entradaGabarito == "b" || entradaGabarito == "c" || entradaGabarito == "d" || entradaGabarito == "e") {
              gabarito.push(entradaGabarito);
              contador++;
            } else {
              console.log("Letra inválida. Tente novamente.");
            }
        }
    }
    
    function armazenarRespostasAlunos(){
        console.log("Entre com as respostas dos alunos.")
        let nota = 0;
        let aluno = 0;
        let row = [];
        for(let i = 0; i < 20; i++){
            aluno ++;
            nota = 1;
            for(j = 0; j < 20; j++){
                console.log(`Entre com a ${nota}ª nota do ${aluno}° aluno:`);
                let resposta = prompt().toLowerCase();
                if (resposta == "a" || resposta == "b" || resposta == "c" || resposta == "d" || resposta == "e") {
                    row.push(resposta);
                    nota++;
                } else {
                  console.log("Letra inválida. Tente novamente.");
                }
            }
        respostasAlunos.push(row);
        row = [];
        }
    }
    
    
    armazenarGabarito();
    console.log("--------------------------------------------------");
    console.log("");
    armazenarRespostasAlunos();
    corrigirProvas(gabarito, respostasAlunos);
    console.log("");
    
}
// exercicio37();

module.exports = { exercicio37 };