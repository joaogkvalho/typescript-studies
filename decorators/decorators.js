"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//Exemplo simples do uso de Decorators em classes
//@logarClasse
//@decorator({ a: "Olá", b: 321 })
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log("Hello World");
    }
};
Eletrodomestico = __decorate([
    logarClasseSe(true)
], Eletrodomestico);
function logarClasse(construtor) {
    console.log(construtor);
}
//Decorator Factory
//Factory retornando um decorator ou um decorator vazio de uma função externa
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
//Factory retornando um decorator na mesma função
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
//Utilizando decorators para alterar o construtor da classe
let Geladeira = class Geladeira {
    constructor() {
        console.log("Geladeira");
    }
};
Geladeira = __decorate([
    logarObjeto
], Geladeira);
function logarObjeto(constructor) {
    console.log("Carregado");
    return class extends constructor {
        constructor(...args) {
            console.log("Antes...");
            super(...args);
            console.log("Depois...");
        }
    };
}
new Geladeira();
let Fogao = class Fogao {
    constructor() {
        console.log("Fogão");
    }
};
Fogao = __decorate([
    imprimivel
], Fogao);
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
const eletro = new Fogao();
eletro.imprimir && eletro.imprimir();
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'João Gabriel',
    email: 'joaogkvalho@gmail.com',
    admin: true
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
//Minha versão da resolução
function perfilAdmin(_) {
    if (usuarioLogado.admin != true || !usuarioLogado) {
        throw new Error("Permissão Negada");
    }
}
//Versão do professor da resolução
function perfilAdmin2(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error("Sem Permissão");
            }
        }
    };
}
new MudancaAdministrativa().critico();
//Decorator de métodos, atributos e parâmetros
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor < this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10000);
console.log(cc.getSaldo());
cc.sacar(5000);
console.log(cc.getSaldo());
// cc.getSaldo = function(){
//     return this['saldo'] + 7000
// }
//Decorator de métodos
function congelar(alvo, nomePropriedade, descriptor) {
    console.log(alvo);
    console.log(nomePropriedade);
    descriptor.writable = false;
}
//Decorator de atributo
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error("Saldo inválido");
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        }
    });
}
//Decorator de parâmetro de função
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log(`Alvo: ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);
    console.log(`Indice: ${indiceParam}`);
}
