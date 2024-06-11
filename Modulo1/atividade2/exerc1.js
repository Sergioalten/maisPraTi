/* 
Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.
*/
const prompt = require('prompt-sync')();

function exercicio1(){
    console.clear();
    console.log("EXERCÍCIO 1:");
    console.log("------------");

    function calcularTempoPerdido(cigarrosPorDia, anosDeFumante) {
        const cigarrosPorAno = cigarrosPorDia * 365; // Convertendo cigarros por dia para cigarros por ano
        const tempoPerdidoPorCigarroEmMinutos = 10;
        const tempoPerdidoPorAno = cigarrosPorAno * tempoPerdidoPorCigarroEmMinutos;
        const tempoPerdidoTotal = tempoPerdidoPorAno * anosDeFumante;
    
        // Convertendo o tempo perdido total de minutos para dias
        const diasPerdidos = tempoPerdidoTotal / (24 * 60); 
    
        return diasPerdidos;
    }
    
    const cigarrosPorDia = parseInt(prompt("Digite a quantidade de cigarros fumados por dia: "));
    const anosDeFumante = parseInt(prompt("Digite a quantos anos você fuma: "));
    
    while((cigarrosPorDia <= 0 || anosDeFumante <= 0) || (isNaN(cigarrosPorDia) || isNaN(anosDeFumante))){
        console.log("Insira dados válidos.");
    
        cigarrosPorDia = parseInt(prompt("Digite a quantidade de cigarros fumados por dia: "));
        anosDeFumante = parseInt(prompt("Digite a quantos anos você fuma: "));
    } 
    
    const tempoPerdidoEmDias = calcularTempoPerdido(cigarrosPorDia, anosDeFumante);
    const tempoPerdidoEmAnos = tempoPerdidoEmDias / 365;
    
    console.log("Tempo de vida perdido em dias: ", tempoPerdidoEmDias.toFixed(0));
    
    if (tempoPerdidoEmAnos >= 1){
        console.log("Tempo de vida perdido em anos: ", tempoPerdidoEmAnos.toFixed(0));
    }
    
}
// exercicio1();

module.exports = { exercicio1 };