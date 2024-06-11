const prompt = require('prompt-sync')();

const { exercicio1 } = require("./exerc1.js");
const { exercicio2 } = require("./exerc2.js");
const { exercicio3 } = require("./exerc3.js");
const { exercicio4 } = require("./exerc4.js");
const { exercicio5 } = require("./exerc5.js");
const { exercicio6 } = require("./exerc6.js");
const { exercicio7 } = require("./exerc7.js");
const { exercicio8 } = require("./exerc8.js");
const { exercicio9 } = require("./exerc9.js");
const { exercicio10 } = require("./exerc10.js");
const { exercicio11 } = require("./exerc11.js");
const { exercicio12 } = require("./exerc12.js");
const { exercicio13 } = require("./exerc13.js");
const { exercicio14 } = require("./exerc14.js");
const { exercicio15 } = require("./exerc15.js");
const { exercicio16 } = require("./exerc16.js");
const { exercicio17 } = require("./exerc17.js");
const { exercicio18 } = require("./exerc18.js");
const { exercicio19 } = require("./exerc19.js");
const { exercicio20 } = require("./exerc20.js");
const { exercicio21 } = require("./exerc21.js");
const { exercicio22 } = require("./exerc22.js");
const { exercicio23 } = require("./exerc23.js");
const { exercicio24 } = require("./exerc24.js");
const { exercicio25 } = require("./exerc25.js");
const { exercicio26 } = require("./exerc26.js");
const { exercicio27 } = require("./exerc27.js");
const { exercicio28 } = require("./exerc28.js");
const { exercicio29 } = require("./exerc29.js");
const { exercicio30 } = require("./exerc30.js");
const { exercicio31 } = require("./exerc31.js");
const { exercicio32 } = require("./exerc32.js");
const { exercicio33 } = require("./exerc33.js");
const { exercicio34 } = require("./exerc34.js");
const { exercicio35 } = require("./exerc35.js");
const { exercicio36 } = require("./exerc36.js");
const { exercicio37 } = require("./exerc37.js");
const { exercicio38 } = require("./exerc38.js");
const { exercicio39 } = require("./exerc39.js");
const { exercicio40 } = require("./exerc40.js");
const { exercicio41 } = require("./exerc41.js");
const { exercicio42 } = require("./exerc42.js");
const { exercicio43 } = require("./exerc43.js");
const { exercicio44 } = require("./exerc44.js");
const { exercicio45 } = require("./exerc45.js");
const { exercicio46 } = require("./exerc46.js");
const { exercicio47 } = require("./exerc47.js");
const { exercicio48 } = require("./exerc48.js");
const { exercicio49 } = require("./exerc49.js");
const { exercicio50 } = require("./exerc50.js");

function programaPrincipal(){
	let teste = true;
	let numeroQuestao;

	console.log("✅ Abrindo lista de atividades.");

	do{
		numeroQuestao = parseInt(prompt("Informe o número da questão que deseja testar: "));
		if (isNaN(numeroQuestao) || numeroQuestao > 50 || numeroQuestao < 1) {
			console.log("❌ Erro: Somente números entre 1 e 50 são válidos.");
			teste = true;
		} else {
			teste = false;
		}
	} while (teste);
	  
	switch (numeroQuestao) {
		case 1:
			  exercicio1();
			  break;
		case 2:
			  exercicio2();
			  break;
		case 3:
			  exercicio3();
			  break;
		case 4:
			  exercicio4();
			  break;
		case 5:
			  exercicio5();
			  break;
		   case 6:
			  exercicio6();
			  break;
		case 7:
			  exercicio7();
			  break;
		case 8:
			  exercicio8();
			  break;
		case 9:
			  exercicio9();
			  break;
		case 10:
			  exercicio10();
			  break;
		case 11:
			  exercicio11();
			  break;
		case 12:
			  exercicio12();
			  break;
		case 13:
			  exercicio13();
			  break;
		case 14:
			  exercicio14();
			  break;
		case 15:
			  exercicio15();
			  break;
		case 16:
			  exercicio16();
			  break;
		case 17:
			  exercicio17();
			  break;
		case 18:
			  exercicio18();
			  break;
		case 19:
			  exercicio19();
			  break;
		case 20:
			  exercicio20();
			  break;
		case 21:
			  exercicio21();
			  break;
		case 22:
			  exercicio22();
			  break;
		case 23:
			  exercicio23();
			  break;
		case 24:
			  exercicio24();
			  break;
		case 25:
			  exercicio25();
			  break;
		case 26:
			  exercicio26();
			  break;
		case 27:
			  exercicio27();
			  break;
		case 28:
			  exercicio28();
			  break;
		case 29:
			  exercicio29();
			  break;
		case 30:
			  exercicio30();
			  break;
		case 31:
			  exercicio31();
			  break;
		case 32:
			  exercicio32();
			  break;
		case 33:
			  exercicio33();
			  break;
		case 34:
			  exercicio34();
			  break;
		case 35:
			  exercicio35();
			  break;
		case 36:
			  exercicio36();
			  break;
		case 37:
			  exercicio37();
			  break;
		case 38:
			  exercicio38();
			  break;
		case 39:
			  exercicio39();
			  break;
		case 40:
			  exercicio40();
			  break;
		case 41:
			  exercicio41();
			  break;
		case 42:
			  exercicio42();
			  break;
		case 43:
			  exercicio43();
			  break;
		case 44:
			  exercicio44();
			  break;
		case 45:
			  exercicio45();
			  break;
		case 46:
			  exercicio46();
			  break;
		case 47:
			  exercicio47();
			  break;
		case 48:
			  exercicio48();
			  break;
		case 49:
			  exercicio49();
			  break;
		case 50:
			  exercicio50();
			  break;
	}
}
console.log("Lista 02 de atividades.");
console.log("-----------------------");

function continuarPrograma(){
	do {
		console.log("");
		console.log("-------------------------------");
		console.log("Deseja abrir um novo exercício?");
		console.log("Digite: 1 - Sim  ||  2 - Não");
		continuar = parseInt(prompt());

		if(isNaN(continuar) || continuar < 1 || continuar > 2){
			console.log("❌ Erro: Entrada inválida.");
		} else {
			console.clear();
		}
	} while (isNaN(continuar) || continuar < 1 || continuar > 2);
}

let continuar = 1;

while(continuar === 1){

	programaPrincipal();

	continuarPrograma();
}

console.log("------------------------");
console.log("Programa finalizado! 👋");
console.log("------------------------");