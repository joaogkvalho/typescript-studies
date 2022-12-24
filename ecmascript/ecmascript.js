"use strict";
//Arrow Function
// função anônima
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
//função comum
function subtrair(n1, n2) {
    return n1 - n2;
}
console.log(subtrair(5, 2));
//função arrow
const dividir = (n1, n2) => n1 / n2;
console.log(dividir(10, 5));
//This
//Nesse tipo de função o This sempre vai variar de acordo 
//com a forma como a função é chamada ou por quem a chamou.
function normalComThis() {
    // console.log(this) //Valor do this = undefined
}
normalComThis();
function normalComThisEspecial() {
    normalComThis.bind(2); //Valor do this = 2
}
//Já quando se trata de um arrow function o valor do This nunca varia, SEMPRE será o mesmo.
//Para o This dentro de uma função arrow sempre será atribuído o valor do This da linha
//anterior a qual a função foi criada.
// const arrowComThis = () => console.log(this) //Valor do This = Window
// const arrowComThisEspecial = () => arrowComThis.bind(4) //Valor do This = Window
//Parâmetro Padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim");
}
contagemRegressiva();
//Spread Operator
//Espalha(spread) itens de um array como se fossem parâmetros de uma função
const numbers = [0, 10, 76, 8, 99];
console.log(Math.max(...numbers));
console.log(...numbers);
const turma1 = ["João", "Lucas", "Maria"];
const turma2 = ["Gabriel", "Lucia", ...turma1, "Marcia"];
console.log(turma2);
//Rest Operator
//Comprime parâmetros de uma função dentro de um array
function retornaArray(...args) {
    return args;
}
console.log(retornaArray(2, 5, 4, 6, 7, 8));
console.log(retornaArray(...numbers));
//Rest & Spread com Tuplas
const tupla = [2, "abc", true];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
//Destructuring(array)
const caracteristicas = ["Motor Turbo", 2017];
const [motor, ano] = caracteristicas;
console.log(motor, ano);
//Destructuring(objeto)
const pessoa = {
    altura: 1.85,
    comidaFavorita: "Pizza",
    gostos: {
        g1: "Jogar",
        g2: "Comer"
    }
};
const { altura, comidaFavorita, gostos: { g2 } } = pessoa;
console.log(altura, comidaFavorita, g2);
//Template String
const usuario = "João Gabriel";
const notificacoes = '12';
//Sem Template String
const boasVindas = "Bom dia " + usuario + " Notificações: " + notificacoes;
console.log(boasVindas);
//Com Template Strings
const boasVindas2 = `Bom dia ${usuario}, Notificações: ${parseInt(notificacoes) > 10 ? "+10" : notificacoes}`;
console.log(boasVindas2);
console.log(`${(2 + 2) * 20}`);
