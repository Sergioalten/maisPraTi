/*
A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos.
Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos,
o maior salário e o percentual de pessoas com salário até R$ 350,00.
 */
const prompt = require('prompt-sync')();

function exercicio22(){
    console.clear();
    console.log("EXERCÍCIO 22:");
    console.log("-------------");

    const listSalarios = [];
    const qtdFilhos = [];
    
    function programaPrincipal(){
        let escolhaUsuario;
        let indice = 0;
    
        do{
            indice++;
            console.log(`Cadastrar o habitante ${indice}`);
    
            cadastrarSalarios();
    
            cadastrarQtdFilho();
    
            escolhaUsuario = continuarCadastro();
    
        } while(escolhaUsuario === true)
    }
    
    function cadastrarSalarios(){
        let verificador;
        do {
            console.log("Digite o salário: ");
            let salario = parseFloat(prompt());
    
            if(isNaN(salario) || (salario <= 0)){
                console.log("Entrada inválida");
                verificador = true;
            } else {
                listSalarios.push(salario);
                verificador = false;
            }
        } while(verificador === true);
    }
    
    function cadastrarQtdFilho(){
        let verificador;
    
        do {
            console.log("Digite a quantidade de filhos: ");
            let filhos = parseInt(prompt());
    
            if(Number.isInteger(filhos)){
                qtdFilhos.push(filhos);
                verificador = false;
            }else {
                console.log("Entrada inválida.");
                verificador = true;
            }
        }while(verificador === true)
    }
    
    function continuarCadastro(){
        let teste;
    
        do{
            console.log("\nDeseja cadastrar um novo habitente? 1 - Sim || 2- Não");
            let escolhaUsuario = parseInt(prompt());
            console.log("");
    
            switch(escolhaUsuario){
                case 1:
                    escolhaUsuario = true;
                    teste = false;
                    return escolhaUsuario;
                case 2:
                    escolhaUsuario = false;
                    teste = false;
                    return escolhaUsuario;
                default:
                    console.log("Entrada inválida.");
                    teste = true;
                    break;
            }
    
        }while(teste);
    }
    
    function mediaSalario(){
        let soma = 0;
        let media = 0;
        for(i in listSalarios){
            soma += listSalarios[i];
        }
        media = soma / listSalarios.length;
        console.log("");
        console.log("----------------------------------------------------");
        console.log(`A média de salário da população é: R$ ${media.toFixed(2)}`);
        console.log("");
    }
    
    function mediaQtdFilhos(){
        let soma = 0;
        let media = 0;
        for(i in qtdFilhos){
            soma += qtdFilhos[i];
        }
        media = soma / qtdFilhos.length;
        console.log(`A média do número de filhos é: ${media}`);
        console.log("");
    }
    
    function verificarMaiorSalario(){
        let maiorSalario = listSalarios[0];
        
        for (let i = 1; i < listSalarios.length; i++) {
            if (listSalarios[i] > maiorSalario) {
                maiorSalario = listSalarios[i];
            }
        }
        console.log(`O maior salário é: R$ ${maiorSalario.toFixed(2)}`);
        console.log("");
    }
    
    function percentualPessoas(){
        const valoresBaixos = [];
        for(i in listSalarios){
            if(listSalarios[i] <= 350){
                valoresBaixos.push(listSalarios[i]);
            }
        }
        const percentual = (valoresBaixos.length * 100) / listSalarios.length;
    
        console.log(`A porcentagem de pessoas com salário até R$350,00 é de: ${percentual.toFixed(2)}%`);
        console.log("");
    }
    
    programaPrincipal();
    mediaSalario();
    mediaQtdFilhos();
    verificarMaiorSalario();
    percentualPessoas();
    
    console.log("----------------------------------------------------");
    console.log("Programa encerrado!");
    
}

module.exports = { exercicio22 };