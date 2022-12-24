"use strict";
//Classe padrão(sintaxe mais verbosa)
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(26, 2, 2002);
console.log(aniversario);
//Classe esperta(sintaxe reduzida), utilizando valores padrão
class Pessoa {
    constructor(nome = "Jhon", idade = 16, isMan = true) {
        this.nome = nome;
        this.idade = idade;
        this.isMan = isMan;
    }
}
const joao = new Pessoa;
console.log(joao);
//Desafio Classe Produto
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        const valorDesconto = this.preco * this.desconto;
        return Math.floor(this.preco - valorDesconto);
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} ${this.desconto * 100}% OFF`;
    }
}
const prod1 = new Produto("Super Martelo", 500);
prod1.desconto = 0.8;
console.log(prod1.resumo());
const prod2 = new Produto("Ultra Secador", 630, 0.5);
console.log(prod2.resumo());
//Exemplo mais complexo e classes usando modificadores de acesso (Private e Public)
class Moto {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        //Private(somente visível dentro da classe, não pode ser passado por herança)
        this.velocidadeAtual = 0;
    }
    //Protected(somente visível dentro da classe mas é passado através de herança)
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    //Public(visível fora do escopo da classe)
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const moto1 = new Moto("Honda", "Pop100", 300);
Array(35).fill(0).forEach(() => moto1.acelerar());
console.log(moto1.acelerar());
//Herança(forma de passar atributos e metodos de uma classe pai para uma classe filho)
class Carro extends Moto {
    constructor(modelo, velocidadeMaxima) {
        super('Fiat', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(50);
    }
    frear() {
        return this.alterarVelocidade(-20);
    }
}
const carro1 = new Carro("Uno", 180);
console.log(`${carro1.marca}, ${carro1.modelo}`);
console.log(carro1.acelerar());
console.log(carro1.frear());
//Getters & Setters
class Usuario {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 18) {
            this._idade = valor;
        }
    }
}
const usuario1 = new Usuario;
//Set
//Método que é interpretado como um atributo usado 
//para redefinir o valor de um atributo
usuario1.idade = 16;
//Get
//Método que é interpretado como um atributo usado 
//para retornar o valor de uma atributo
console.log(usuario1.idade);
//Atributos e Métodos estáticos
//pertecem diretamente a classe pai e não as instâncias criadas a partir dela
class Matematica {
    static areaDaCirc(raio) {
        return Matematica.pi * raio * raio;
    }
}
Matematica.pi = 3.1416;
console.log(Matematica.areaDaCirc(4));
//Classes abstratas
//são classes que não podem ser instanciadas
//usadas para servir de herança para outras classes
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
const calcSoma = new Soma();
calcSoma.executar(2, 4, 6, 8);
console.log(calcSoma.getResultado());
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
const calcMulti = new Multiplicacao();
calcMulti.executar(2, 4, 5, 10);
console.log(calcMulti.getResultado());
//Construtor Privado & Singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    getHours() {
        return new Date;
    }
}
Unico.instance = new Unico;
console.log(Unico.getInstance().getHours());
//Somente leitura
class Notebook {
    constructor(modelo, marca) {
        this.marca = marca;
        this.marca = marca;
        this.modelo = modelo;
    }
}
const note1 = new Notebook("P086", "Asus");
console.log(note1);
// note1.marca = "HP" (ERRO)
