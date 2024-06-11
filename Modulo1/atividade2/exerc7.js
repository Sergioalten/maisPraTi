/*
Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00.
Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e 
quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km 
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/
const prompt = require('prompt-sync')();

function exercicio7(){
    console.clear();
    console.log("EXERCÍCIO 7:");
    console.log("------------");

    function calcularServico(carro, km, dias, valor) {
        if (carro === "popular") {
            if (km <= 100) {
                valor += (valorPopular * dias) + (km * 0.2);
                console.log(`O valor cobrado será R$ ${valor.toFixed(2)}`);
            } else {
                valor += (valorPopular * dias) + (km * 0.1);
                console.log(`O valor cobrado será R$ ${valor.toFixed(2)}`);
            }
        }
    
        if (carro === "luxo") {
            if (km <= 200) {
                valor += (valorLuxo * dias) + (km * 0.3);
                console.log(`O valor cobrado será R$ ${valor.toFixed(2)}`);
            } else {
                valor += (valorLuxo * dias) + (km * 0.25);
                console.log(`O valor cobrado será R$ ${valor.toFixed(2)}`);
            }
        }
    }
    
    const options = ['popular', 'luxo'];
    let carro;
    let dias;
    let valorPopular = 90;
    let valorLuxo = 150;
    let km;
    let valor = 0;
    
    do {
        carro = prompt('Escolha entre o tipo de carro: Popular ou de Luxo? ').trim().toLowerCase();
        if (!options.includes(carro)) {
            console.log('Escolha inválida. Por favor, escolha carro Popular ou carro de Luxo.');
        }
    } while (!options.includes(carro));
    
    dias = parseInt(prompt('Por quantos dias você alugou o carro? '));
    km = parseFloat(prompt('Quantos quilometros você percorreu? '));
    
    calcularServico(carro,km, dias, valor);

}

module.exports = { exercicio7 };