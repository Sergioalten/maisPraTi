/*
Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. 
Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/
const prompt = require('prompt-sync')();

function exercicio21(){
    console.clear();
    console.log("EXERCÍCIO 21:");
    console.log("-------------");

    let testeAlt = true;
    let testeSexo = true;
    let altura;
    let sexo;
    
    function calcularPesoIdeal() {
        while(testeAlt){
            console.log("Qual a sua altura? (em centímetros. ex: 178cm): ");
            altura = parseInt(prompt());
            if(validarAltura(altura)){
                testeAlt = false;
            } else {
                console.log('Altura inválida. Por favor, tente novamente.');
            }
        }
    
        while(testeSexo){
            console.log("Digite o sexo? (1-Masculino ou 2-Feminino)")
            sexo = parseInt(prompt());
            if(validarSexo(sexo)){
                testeSexo = false;
            } else {
                console.log('Sexo inválid0. Por favor, tente novamente.');
            }
        }
      
    
        const alturaFormatada = altura / 100;
        if (sexo === 1){
            const pesoHomens = pesoIdealHomens(alturaFormatada);
            console.log(`O peso ideal para um homem de altura de ${alturaFormatada.toFixed(2)} é de ${pesoHomens.toFixed(2)} kg.`);
        } else{
            const pesoMulheres = pesoIdealMulheres(alturaFormatada);
            console.log(`O peso ideal para uma mulher de altura de ${alturaFormatada.toFixed(2)} é de ${pesoMulheres.toFixed(2)} kg.`);
        }
    }
      
    function validarAltura(entradaAtura) {
        if (isNaN(entradaAtura) || entradaAtura < 50) {
            return false;
        } else{
            return true;
        }
    }
      
    function validarSexo(entradaSexo) {
        if (entradaSexo !== 1 && entradaSexo !== 2) {
            return false;
        } else{
            return true;
        }
    }
      
    function pesoIdealHomens(pesoHomens) {
        const pesoIdeal = 72.7 * pesoHomens - 58;
        return pesoIdeal;
    }
      
    function pesoIdealMulheres(pesoMulheres) {
        const pesoIdeal = 62.1 * pesoMulheres - 44.7;
        return pesoIdeal;
    }
      
    calcularPesoIdeal();
    
}

module.exports = { exercicio21 };