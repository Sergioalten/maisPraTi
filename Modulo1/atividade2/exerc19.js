/*
Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS.
*/
const prompt = require('prompt-sync')();

function exercicio19(){
    console.clear();
    console.log("EXERCÍCIO 19:");
    console.log("------------");

    let contador = 1;
    const horarios = [];
    function validarHorario(horario) {
        const partes = horario.split('.');
        if (partes.length !== 3) {
            return false;
        }
        
        const horas = parseInt(partes[0]);
        const minutos = parseInt(partes[1]);
        const segundos = parseInt(partes[2]);
        if (
            isNaN(horas) ||
            isNaN(minutos) ||
            isNaN(segundos) ||
            horas < 0 ||
            horas > 23 ||
            minutos < 0 ||
            minutos > 59 ||
            segundos < 0 ||
            segundos > 59
            ){
                return false;
        } else {
            return true;
        }
    }
      
    do{
        console.log('Entre com o horário no formato HH.MM.SS')
        let horario = prompt(`${contador}- `);
    
        if(validarHorario(horario)){
            horario = horario.replace(/\./g, ":");
            horarios.push(horario);
            contador++;
        } else {
            console.log("Erro de formato! Digite novamente.")
        }
    
    } while(contador <= 5);
    
    console.log('')
    console.log('Horários digitados');
    console.log('------------------')
    
    for(let i in horarios){
        console.log(`Horário ${parseInt(i) + 1}: ${horarios[i]}`);
    }
    
}

module.exports = { exercicio19 };