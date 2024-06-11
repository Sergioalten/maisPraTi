/*
Faça um algoritmo que leia um vetor (A) de 100 posições.
Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

function exercicio39(){
    console.clear();
    console.log("EXERCÍCIO 39:");
    console.log("-------------");

    function gerarVetorAleatorio() {
        const numerosAleatorios = [];
    
        for (let i = 0; i < 100; i++) {
            // Números entre -40 e 60.
            const numeroAleatorio = Math.floor(Math.random() * (60 - (-40) + 1)) + (-40);
            numerosAleatorios.push(numeroAleatorio);
        }
      
        return numerosAleatorios;
    }
    
    function compactarVetor(vetor){
        const vetorPositivo = vetor.filter((n) => n >= 0);
        const vetorNegativo = vetor.filter((n) => n < 0);
        console.log("Vetor sem os números nulos ou negativos:");
        console.log(vetorPositivo);
        console.log("");
        console.log("-------------------------------------------------");
        console.log("Vetor com os números nulos ou negativos:")
        console.log(vetorNegativo);
    }
    
    console.log("Vetor Original: ", gerarVetorAleatorio());
    console.log("-------------------------------------------------");
    compactarVetor(gerarVetorAleatorio());
    
}

// exercicio39();

module.exports = { exercicio39 };