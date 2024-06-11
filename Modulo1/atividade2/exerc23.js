/*
Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos.
 */
console.clear();

function exercicio23(){
	console.clear();
	console.log("EXERCÍCIO 23:");
	console.log("-------------");

	let matrizIdentidade = [];
  
	console.log("Matriz identidade")
	console.log("--------------");
  
	for (let i = 0; i < 7; i++) {
    	matrizIdentidade[i] = [];
  
    	for (let j = 0; j < 7; j++) {
      		matrizIdentidade[i][j] = i === j ? 1 : 0;
    	}
  	}
  
  	for (let i = 0; i < matrizIdentidade.length; i++) {
    	console.log(matrizIdentidade[i].join(' '));
  	}
  	console.log("--------------");
  
}

module.exports = { exercicio23 };