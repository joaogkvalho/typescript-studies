"use strict";
// //Desafio 01 - Classes
class Bicleta {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log("Fon Fon");
    }
    acelerar(delta) {
        const novaVelocidade = this.velocidade + delta;
        novaVelocidade >= 0 ? this.velocidade = novaVelocidade : this.velocidade = 0;
        return this.velocidade;
    }
}
const bicicleta1 = new Bicleta("Cargueira");
bicicleta1.buzinar();
console.log(bicicleta1.velocidade);
console.log(bicicleta1.acelerar(5));
// Desafio 02 - Herança
class Object2d {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Object2d {
    getArea() {
        return this.base * this.altura;
    }
}
const retangulo1 = new Retangulo(5, 5);
console.log(retangulo1.getArea());
//Desafio 03 - Getters and Setters
class Estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(nome) {
        if (nome.length >= 3) {
            this._primeiroNome = nome;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const estagiario1 = new Estagiario;
console.log(estagiario1.primeiroNome);
estagiario1.primeiroNome = "Jo";
console.log(estagiario1.primeiroNome);
estagiario1.primeiroNome = "João";
console.log(estagiario1.primeiroNome);
