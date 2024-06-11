/*
Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro.
 */
const prompt = require('prompt-sync')();

function exercicio18(){
    console.clear();
    console.log("EXERCÍCIO 18:");
    console.log("------------");

    const funcionario = {};
    
    function cadastrarFuncionario(nome, cargo, salario){
        funcionario.nome = nome;
        funcionario.cargo = cargo;
        funcionario.salario = salario;
        return funcionario;
    }
    
    function mostrarDados(dados){
        console.log(`Dados Cadastrados:
        Nome: ${dados.nome}
        Cargo: ${dados.cargo}
        Salário: R$ ${dados.salario}`);
    }
    
    console.log("Cadastrar funcionário!");
    console.log("----------------------")
    
    console.log("Entre com o nome do funcionário: ");
    let nome = prompt();
    console.log("Entre com o cargo do funcionário: ");
    let cargo = prompt();
    console.log("Digite o salário do funcionário: ");
    let salario = parseFloat(prompt()).toFixed(2);
    
    cadastrarFuncionario(nome, cargo, salario);
    mostrarDados(funcionario);
    
}

module.exports = { exercicio18 };