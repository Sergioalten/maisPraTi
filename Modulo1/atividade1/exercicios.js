const prompt = require('prompt-sync')();

//------=== EXERCÍCIO 1 ===------
/*
Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.
Multiplicar a temperatura em graus Celsius por 1,8 e somar 32
*/
// let grausCelsius;
// let grausFahrenheit;

// while(true){
//     grausCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius: "));
//     if (!isNaN(grausCelsius)) {
//         break;
//     } else {
//         console.log("Insira um valor numérico.")
//     }
// }

// grausFahrenheit = (grausCelsius * 1.8) + 32;

// console.log(`A temperatura em Fahrenheit é: ${grausFahrenheit.toFixed(1)}`);



//------=== EXERCÍCIO 2 ===------
/*
Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. 
Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
*/
// let numeroEleitores;
// let votosValidos;
// let votosNulos;
// let votosBrancos;
// let totalVotos;

// while(true){
//     while(true){
//         numeroEleitores = parseInt(prompt("Digite a quantidade de eleitores: "));
//         votosValidos = parseInt(prompt("Digite a quantidade de votos válidos: "));
//         votosNulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
//         votosBrancos = parseInt(prompt("Digite a quantidade de votos em branco: "));

//         totalVotos = votosBrancos + votosNulos + votosValidos;

//         if(isNaN(totalVotos) || isNaN(numeroEleitores)){
//             console.log("Insira dados válidos.\n");
//         } else {
//             break;
//         }
//     }

//     if (numeroEleitores < totalVotos){
//         console.log("Erro: Total de votos não pode ser maior que o número de eleitores.\n")
//     } else if ((votosBrancos || votosNulos || votosValidos) < 0) {
//         console.log("ERRO: Não permitido quantidade de votos negativos.\n")
//     } else {
//         break;
//     } 
// }

// console.log(`\nTotal de número de eleitores: ${numeroEleitores}`);
// console.log(`Total de votos: ${totalVotos}`);

// let porctValidos = (votosValidos * 100) / numeroEleitores;
// let porctNulos = (votosNulos * 100) / numeroEleitores;
// let porctBrancos = (votosBrancos * 100) / numeroEleitores;

// console.log(`Percentual de votos válidos é: ${porctValidos.toFixed(2)}%`);
// console.log(`Percentual de votos nulos é: ${porctNulos.toFixed(2)}%`);
// console.log(`Percentual de votos em branco é: ${porctBrancos.toFixed(2)}%`);



//------=== EXERCÍCIO 3 ===------
/* Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
    -> Some 25 ao primeiro inteiro;
    -> Triplique o valor do segundo inteiro;
    -> Modifique o valor do terceiro inteiro para 12% do valor original;
    -> Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
    dos primeiros três inteiros.
*/
// let num1 = parseInt(prompt("Digite o primeiro número: "));
// let num2 = parseInt(prompt("Digite o segundo número: "));
// let num3 = parseInt(prompt("Digite o terceiro número: "));
// let num4 = parseInt(prompt("Digite o quarto número: "));

// num1 += 25;
// num2 *= 3;
// num3 *= 12/100;
// num4 = num1 + num2 + num3;

// console.log(`Somado 25 ao primeiro número, o resultado é: ${num1}`);
// console.log(`Triplicando o valor do segundo número, o resultado é: ${num2}`);
// console.log(`Modificando o valor do terceiro número para 12% do valor original, o resultado é: ${num3}`);
// console.log(`A soma dos 3 primeiros valores originais, o resultado é: ${num4}`);



//------=== EXERCÍCIO 4 e 5 ===------
/*
4.Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem:
 ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).

 5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0.
*/
// let nota1 = parseFloat(prompt("Digite a primeira nota: "));
// let nota2 = parseFloat(prompt("Digite a segunda nota: "));

// let media = (nota1 + nota2) / 2;

// if (media >= 6) {
//     console.log(`A média foi: ${media}. PARABÉNS! Você foi aprovado.`);
// } else {
//     console.log(`A média foi: ${media}. Você foi REPROVADO! Estude mais.`)
// }



//------=== EXERCÍCIO 6 ===------
/* 
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo.
 Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
    Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
    -> Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    -> Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    -> Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/
// let ladoA = parseInt(prompt("Insira o comprimento do primeiro lado: "));
// let ladoB = parseInt(prompt("Insira o comprimento do segundo lado: "));
// let ladoC = parseInt(prompt("Insira o comprimento do terceiro lado: "));

// if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
//     console.log("É possível formar um triângulo com essas medidas.");

//     if (ladoA === ladoB && ladoB === ladoC) {
//         console.log("É um triângulo equilátero.");
//     } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
//         console.log("É um triângulo isósceles.");
//     } else {
//         console.log("É um triângulo escaleno.");
//     }

// } else {
//     console.log("Não é possível formar um triângulo");
// }



//------=== EXERCÍCIO 7 ===------
/*
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. 
Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
*/
// let qtdMacas = parseInt(prompt("Digite a quantidade de maçãs que deseja: "));

// let duzia = qtdMacas * 0.25;
// let menosDuzia = qtdMacas * 0.30;

// if (qtdMacas >= 12) {
//     console.log(`O valor da compra é R$${duzia.toFixed(2)} reais.`);
// } else {
//     console.log(`O valor da compra é R$${menosDuzia.toFixed(2)} reais.`)
// }



//------=== EXERCÍCIO 8 ===------
/*
Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/
// let val1 = parseFloat(prompt("Digite o primeiro valor: "));
// let val2 = parseFloat(prompt("Digite o segundo valor valor: "));

// if (val1 === val2) {
//     console.log("Erro: Valores não podem ser iguais.")
// } else if (val1 > val2) {
//     console.log(`Valores em ordem crescente: ${val2}, ${val1}.`)
// } else {
//     console.log(`Valores em ordem crescente: ${val1}, ${val2}`)
// }



//------=== EXERCÍCIO 9 ===------
/*
Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo, conforme a tabela abaixo:
1- Sul
2- Norte
3- Leste
4- Oeste
5 ou 6- Nordeste
7, 8 ou 9- Sudeste
10 até 20- Centro-Oeste
25 até 50- Noroeste
Fora dos intervalos- Produto importado
*/
// let codidoOrigem;

// while(true){
//     codidoOrigem = parseInt(prompt("Entre com o código do produto: "));

//     if (isNaN(codidoOrigem) || codidoOrigem <= 0){
//         console.log("Insira um valor válido.");
//     } else {
//         break;
//     }
// }

// if (codidoOrigem >= 10 && codidoOrigem <= 20) {
//     codidoOrigem = "Centro-Oeste";
// } else if (codidoOrigem >= 25 && codidoOrigem <= 50) {
//     codidoOrigem = "Noroeste";
// }

// switch(codidoOrigem){
//     case 1:
//         console.log("Produto da região Sul.");
//         break;
//     case 2:
//         console.log("Produto da região Norte.");
//         break;
//     case 3:
//         console.log("Produto da região Leste.");
//         break;
//     case 4:
//         console.log("Produto da região Oeste.");
//         break;
//     case 5:
//     case 6:
//         console.log("Produto da região Nordeste.");
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log("Produto da região Sudeste.");
//         break;
//     case "Centro-Oeste":
//         console.log("Produto da região Centro-Oeste.");
//         break;
//     case "Nordeste":
//         console.log("Produto da região Noroeste.");
//         break;
//     default:
//         console.log("Produto Importado.");
// }



//------=== EXERCÍCIO 10 ===------
/* 
Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/
// let i = 0;
// let numero;

// while(true){
//     numero = parseInt(prompt("Didite um número inteiro: "));
//     if (Number.isInteger(numero)){
//         break;
//     } else {
//         console.log("Erro: Digite um valor válido")
//     }
// }

// while(i < 10){
//     console.log(numero);
//     i++
// }



//------=== EXERCÍCIO 11 ===------
/*
Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada 
valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.
*/
// while(true){
//     let numero = parseInt(prompt("Digite um número inteiro: "));

//     if (numero % 2 === 0) {
//         console.log("Número é par")
//     } else if (numero % 2 === 1){
//         console.log("Número é ímpar")
//     } else {
//         console.log("Erro: Entrada inválida.")
//         break;
//     }
// }



//------=== EXERCÍCIO 12 ===------
/*
Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que, divididos por 11, dão resto igual a 5.
*/
// for (let numero = 1000; numero < 2000; numero++ ) {
//     if (numero % 11 === 5 ) {
//         console.log(numero);
//     }
// }



//------=== EXERCÍCIO 13 ===------
/*
Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
*/
// for (let i = 0; i < 5; i++) {
//     let numero = parseInt(prompt("Digite um número: "));

//     for (let j = 1; j <= numero; j++) {
//         console.log(j, "x", numero, "=", (j * numero));
//     }
// }



//------=== EXERCÍCIO 14 ===------
/*
-> Utilizar somente while.
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
 */
// let soma = 0;
// let divisor = 0;
// let numero = parseFloat(prompt("Digite um número: "));
// let media;

// while (numero !== 0 && !isNaN(numero)) {
//     soma += numero;
//     divisor++;
//     numero = parseFloat(prompt("Digite um número: "));
// }

// media = soma / divisor;

// if (media !== 0 && !isNaN(media)){
//     console.log(`A média aritmética é: ${media}`);
// }else {
//     console.log("Programa encerrado.")
// }



//------=== EXERCÍCIO 15 ===------
/*
Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. 
Fazer a média ponderada desses números e pesos respectivos.
*/
// console.clear();

// let somaTotal = 0;
// let somaProv = 0;
// let pesoTotal = 0;
// let mediaPonderada;

// let numero = parseFloat(prompt("Digite um número: "));
// let pesoProv = parseInt(prompt("Digite o peso associado a este valor: "));

// while ((numero !== 0 && !isNaN(numero)) && (pesoProv !== 0 && !isNaN(pesoProv))) {
//     somaProv = numero * pesoProv;
//     somaTotal += somaProv;
//     pesoTotal += pesoProv;
//     numero = parseFloat(prompt("Digite um valor: "));
//     pesoProv = parseInt(prompt("Digite o peso associado a este valor: "));
// }

// mediaPonderada = somaTotal / pesoTotal;

// if (mediaPonderada !== 0 && !isNaN(mediaPonderada)){
//     console.log(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);
// }else {
//     console.log("Programa encerrado.")
// }



//------=== EXERCÍCIO 16 ===------
/*
Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

// let count = 0;
// let numero = 100;
// let divisor;

// while(count < 50) {
//     divisor = 2;
//     let primo = true;

//     while(divisor < numero){
//         if (numero % divisor === 0) {
//             primo = false;
//             break;
//         }
//         divisor++;
//     }

//     if (primo) {
//         console.log(`O número ${numero} é primo.`);
//         count++;
//     }

//     numero++;
// }