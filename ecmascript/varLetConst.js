"use strict";
//var & let & const
//Variaveis declaradas utilizando a palavra reservada (var) possuem
//o atributo hoisting, onde a variavel mesmo sendo declarada após a chamada
//tem sua declaração sendo içada para cima, resultando assim em um undefined 
var seraQuePode; //hoisting
console.log(seraQuePode);
seraQuePode = "?";
//Variaveis declaradas utilizando a palavra reservada (var) tambem possuem
//tanto o escopo global, escopo de bloco e escopo de função
{
    var saudacao = "Olá"; //escopo de bloco
    console.log(saudacao);
}
console.log(saudacao); //escopo global
function bomDia() {
    var saudacao = "bom dia"; //escopo de função, nesse trecho de código a variavel "saudação" não é a mesma do trecho acima
    console.log(saudacao);
}
bomDia();
//Variaveis utilizando a palavra reservada (let) podem ser reatribuídas,
//mas não possuem o atributo hoisting
let podeSer = "não"; //não possui hoisting
console.log(podeSer);
podeSer = "sim"; //reatribuição
//As variaveis (let) possuem apenas escopo de bloco
//Variaveis declaradas utilizando a palavra reservada (const) são variaveis constantes
//sendo assim não podem ser reatribuídas, e possuem apenas espoco de bloco
const meuNome = "João";
console.log(meuNome);
// (meuNome = "Gabriel") //Erro de reatribuição
{
    const minhaAltura = 1.85;
    console.log(minhaAltura);
}
// console.log(minhaAltura) //Variavel "minhaAltura" não encontrada
