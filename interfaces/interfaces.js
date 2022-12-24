"use strict";
function saudarComOla(humano) {
    console.log(`Olá, ${humano.nome}`);
}
function mudarNome(humano) {
    humano.nome = "Gabriel";
}
const humano = {
    nome: "João",
    idade: 20,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};
saudarComOla(humano);
mudarNome(humano);
saudarComOla(humano);
humano.saudar("Carvalho");
// saudarComOla({ nome: "Lucas", idade: 16, altura: 1.68})
//Interfaces no contexto de classes
class Cliente {
    constructor() {
        this.nome = '';
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "João";
meuCliente.saudar("Carvalho");
const potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
//Quando se trata de classes herdando interfaces se usa a palavra "implements"
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
//Quando uma classe abstrata herda uma interface se tem a necessidade de implementar
//todos os metodos que essa interface possui
class RealABD {
    a() { }
    b() { }
}
