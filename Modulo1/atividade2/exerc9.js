/* 
Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. 
O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.
*/
const prompt = require('prompt-sync')();

function exercicio9(){
    console.clear();
    console.log("EXERCÍCIO 9:");
    console.log("------------");

    let funcHomem = 0;
    const salarioHomens = [];
    let funcMulher = 0;
    const salarioMulheres = [];
    let somaSalarioHomens = 0;
    let somaSalarioMulheres = 0;
    let salario;
    let sexo;
    let controle;
    let numFunc = 0;
    
    function programaPrincipal(){
        do {
            numFunc += 1;
            
    
            console.log(`Entre com o valor do salário do funcionário ${numFunc}:`)
            salario = parseFloat(prompt());
    
            console.log("Entre com o sexo do funcionário: Masculino ou feminino");
            sexo = prompt().trim().toLowerCase();
        
            console.log("Deseja cadastrar um novo salário?")
            console.log("Digite: 1 - Sim || 2 - Não");
            controle = parseInt(prompt());
        
            if(sexo === "masculino"){
                salarioHomens.push(salario);
                funcHomem += 1;
            } else {
                salarioMulheres.push(salario);
                funcMulher += 1;
            }
        
        } while(controle === 1);
    }
    
    function calcularSalarios(){
        for(let i = 0; i < salarioHomens.length; i++){
            somaSalarioHomens += salarioHomens[i];
        }
    
        for(let j = 0; j < salarioMulheres.length; j++){
            somaSalarioMulheres += salarioMulheres[j];
        }
    }
    
    function mostrarDados(){
        console.log("");
        console.clear();
    
        console.log(`Número total de funcionários: ${numFunc}`);
    
        if (somaSalarioHomens > 0){
            console.log("----------------------------------------------------------")
            console.log(`Total de funcionários homens: ${funcHomem}`);
            console.log(`Salário total dos funcionários homens: R$ ${somaSalarioHomens.toFixed(2)}`);
        }
        
        if (somaSalarioMulheres > 0){
            console.log("----------------------------------------------------------")
            console.log(`Total de funcionárias mulheres: ${funcMulher}`);
            console.log(`Salário das mulheres: R$ ${somaSalarioMulheres.toFixed(2)}`);
        }
        
    }
    
    console.log("Cadastrar salário dos funcionários.");
    
    programaPrincipal();
    calcularSalarios();
    mostrarDados();
    
    console.log("\n----------------------------------------------------------\n")
    console.log("Programa Finalizado!!")
    console.log("Obrigado pela preferência.")
}

module.exports = { exercicio9 };