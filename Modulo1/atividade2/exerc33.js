/*
Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.
 */

function exercicio33(){
  console.clear();
  console.log("EXERCÍCIO 33:");
  console.log("-------------");

  const matrizM = [];
  const matrizModificada = [];
  let somaDiagonalSecundaria = 0;
  
  function gerarMatriz(matriz, l, c){
      for (let i = 0; i < l; i++) {
          let row = [];
          for (let j = 0; j < c; j++) {
                row.push(Math.floor(Math.random() * 30 + 1));
          }
          matriz.push(row);
      }
  }
  
  gerarMatriz(matrizM, 3, 3);
  
  for (let i = 0; i < matrizM.length; i++) {
    somaDiagonalSecundaria += matrizM[i][matrizM.length - 1 - i];
  }
  
  let mediaDiagonalSecundaria = somaDiagonalSecundaria / matrizM.length;
  
  
  for (let i = 0; i < matrizM.length; i++) {
    matrizModificada.push([]);
    for (let j = 0; j < matrizM.length; j++) {
      matrizModificada[i].push(matrizM[i][j]);
    }
  }
  
  for (let i = 0; i < matrizM.length; i++) {
    matrizModificada[i][i] = (matrizM[i][i] * mediaDiagonalSecundaria).toFixed(1);
  }
  
  console.log("Matriz original:");
  for (let i = 0; i < matrizM.length; i++) {
      console.log(matrizM[i].join('  '));
  }
  
  console.log("----------------------------------------");
      
  console.log("Matriz Modificada:");
  for (let i = 0; i < matrizModificada.length; i++) {
      console.log(matrizModificada[i].join('  '));
  }
  
}

module.exports = { exercicio33 };