/*
Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. 
Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.
*/

const prompt = require('prompt-sync')();

function exercicio48(){
    console.clear();
    console.log("EXERCÍCIO 48:");
    console.log("-------------");

    function somarInventarios(lojaA, lojaB){
        let inventario = {};

        for(let item in lojaA){
            inventario[item] = lojaA[item];
        }

        for(let item in lojaB){
            if(inventario[item]){
                inventario[item] += lojaB[item];
            } else {
                inventario[item] = lojaB[item];
            }
        }
        return inventario;
    }

    const lojaA = {
        item1: 10,
        item2: 15,
        item4: 20,
        item5: 15,
    };

    const lojaB = {
        item1: 5,
        item3: 20,
        item4: 10,
        item5: 5,
        item6: 15,
        item7: 30,
    };


    let inventarioUnico = somarInventarios(lojaA, lojaB);

    console.log("");
    console.log("Inventário loja A:");
    console.log(JSON.stringify(lojaA));
    console.log("");
    console.log("Inventário loja B:");
    console.log(JSON.stringify(lojaB));
    console.log("");
    console.log("---------------------------------------");
    console.log("Inventário Total:");
    console.log(JSON.stringify(inventarioUnico));
    console.log("");

}

// exercicio48();

module.exports = { exercicio48 };