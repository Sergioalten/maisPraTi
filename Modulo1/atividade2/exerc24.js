/*
Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M.
 */

function exercicio24(){
    console.clear();
    console.log("EXERCÍCIO 24:");
    console.log("-------------");

    let matriz = [
        [1, 2, 3, -4, 5, 6, 7, -8],
        [-9, 10, -11, -12, 13, 14, 15, -16],
        [3, -4, 5, -6, 7, -8, 9, -10],
        [4, -5, 6, -7, 8, 9, 10, -11],
        [5, -6, -7, -8, 9, 10, -11, -12],
        [6, 7, 8, 9, 10, -11, 12, 13],
    ];
    
    let vetorC = [];
    
    for (let i = 0; i < matriz.length; i++) {
        let contador = 0;
    
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
            contador++;
            }
        }
    
        console.log(`Elementos negativos na linha ${i + 1} é de:  ${contador}`);
    
        vetorC.push(contador);
    }
    
    console.log(`Vetor C: ${vetorC}`);
    
}

module.exports = { exercicio24 };