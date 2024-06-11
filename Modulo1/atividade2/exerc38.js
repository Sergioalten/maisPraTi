/*
Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação 
contida nesta variável:
    1- soma dos elementos;
    2- produto dos elementos;
    3- média dos elementos;
    4- ordene os elementos em ordem crescente;
    5- mostre o vetor.
 */
const prompt = require('prompt-sync')();

function exercicio38(){
    console.clear();
    console.log("EXERCÍCIO 38:");
    console.log("-------------");

    function ordenarVetor(vetor) {
        return vetor.sort((a, b) => a - b);
    }
    
    function escolhaOperacao(){
        while(true){
            let escolha = parseInt(prompt("Digite a operação a ser realizada (1: soma, 2: produto, 3: média, 4: ordenar, 5: mostrar): "));
            if(Number.isInteger(escolha)){
                return escolha;
            }
        }
    }
        
    function main() {
        let vetor = [];
        
        while(vetor.length < 6){
            for (let i = 0; i < 6; i++) {
                let elemento = parseInt(prompt(`Digite o elemento ${vetor.length + 1} do vetor: `));
                if(Number.isInteger(elemento)){
                    vetor.push(elemento);
                } else {
                    console.log("Entrada inválida");
                }
            }
        }
    
        console.log("--------------------------------------------------------------------")
        
        let identificador;
    
        let teste = false;
        do{
            identificador = escolhaOperacao();
            
            switch (identificador) {
                case 1:
                    let soma = vetor.reduce((acc, val) => acc + val, 0);
                    console.log("Soma dos elementos:", soma);
                    break;
                case 2:
                    let produto = vetor.reduce((acc, val) => acc * val, 1);
                    console.log("Produto dos elementos:", produto);
                    break;
                case 3:
                    let somaProv = vetor.reduce((acc, val) => acc + val, 0);
                    let media = somaProv / vetor.length;
                    console.log("Média dos elementos:", media.toFixed(2));
                    break;
                case 4:
                    let vetorOrdenado = ordenarVetor(vetor);
                    break;
                case 5:
                    console.log("Vetor ordenado:", vetorOrdenado.join(" "));
                    break;
                default:
                    console.log("Identificador inválido.");
                    break;
            }
    
            console.log("------------------------------------");
            console.log("Deseja realizar outra operação? Digite:")
            console.log("1 - Sim  ||  2 - Nâo");
            escolha = parseInt(prompt());
    
            console.log("");
    
            if(escolha === 1){
                teste = true;
            } else {
                teste = false;
            }
    
        }while(teste == true);   
    }
        
    main();
    
}

module.exports = { exercicio38 };