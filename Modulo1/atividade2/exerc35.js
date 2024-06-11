/*
Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. 
Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. 
Cada vetor pode ser preenchido quantas vezes forem necessárias.
 */

function exercicio35(){
    console.clear();
    console.log("EXERCÍCIO 35:");
    console.log("-------------");

    const valores = [];
    for(let i = 0; i < 30; i++){
        valores.push(Math.floor(Math.random() * 30 + 1));
    }
    
    function separarValores(valores) {
        let pares = [];
        let impares = [];
        
        for (let i = 0; i < valores.length; i++) {
            if (valores[i] % 2 === 0) {
                pares.push(valores[i]);
                if (pares.length === 5) {
                    console.log("Vetor de pares cheio:", pares);
                    pares = [];
                }
            } else {
                impares.push(valores[i]);
                if (impares.length === 5) {
                    console.log("Vetor de ímpares cheio:", impares);
                    impares = [];
                }
            }
        }
    
        if (pares.length > 0) {
            console.log("Valores restantes no vetor de pares:", pares);
        }
        
        if (impares.length > 0) {
            console.log("Valores restantes no vetor de ímpares:", impares);
        }
    }
    
    console.log("");
    separarValores(valores);
    console.log("----------------------------------------------------------");
    console.log("");
    
}

module.exports = { exercicio35 };