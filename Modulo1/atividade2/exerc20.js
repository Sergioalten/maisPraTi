/*
Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte:
- existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. 
Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
    Matrícula:
    Nome:
    Salário bruto:
    Dedução INSS:
    Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).
*/

function exercicio20(){
    console.clear();
    console.log("EXERCÍCIO 20:");
    console.log("------------");

    const funcionarios = [
        {
            matricula: 1,
            nome: "Funcionário 1",
            salarioBruto: 1700.00,
        },
        {
            matricula: 2,
            nome: "Funcionário 2",
            salarioBruto: 3500.00,
        },
        {
            matricula: 3,
            nome: "Funcionário 3",
            salarioBruto: 2000.00,
        },
        {
            matricula: 4,
            nome: "Funcionário 4",
            salarioBruto: 1750.00,
        },
        {
            matricula: 5,
            nome: "Funcionário 5",
            salarioBruto: 1900.00,
        }
    ];
    
    function gerarFolhaPagamento(){
        for (const funcionario of funcionarios) {
            const salarioBruto = funcionario.salarioBruto;
            const deducao = salarioBruto * 0.12;
            const salarioLiquido = salarioBruto - deducao;
      
            console.log(`-----------------------------`);
            console.log(`Matrícula: ${funcionario.matricula}`);
            console.log(`Nome: ${funcionario.nome}`);
            console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
            console.log(`Dedução INSS: R$ ${deducao.toFixed(2)}`);
            console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
        }
    };
      
    gerarFolhaPagamento();
    
}

module.exports = { exercicio20 };