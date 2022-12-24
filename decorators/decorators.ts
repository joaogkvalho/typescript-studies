//Exemplo simples do uso de Decorators em classes
//@logarClasse
//@decorator({ a: "Olá", b: 321 })
@logarClasseSe(true)
class Eletrodomestico {
    constructor(){
        console.log("Hello World")
    }
}

function logarClasse(construtor: Function){
    console.log(construtor)
}

//Decorator Factory
//Factory retornando um decorator ou um decorator vazio de uma função externa
function decoratorVazio(_: Function){}

function logarClasseSe(valor: boolean){
    return valor ? logarClasse : decoratorVazio
}


//Factory retornando um decorator na mesma função
function decorator(obj: { a: string, b: number }){
    return function(_: Function): void{ 
        console.log(obj.a + ' ' + obj.b)
    }
}


//Utilizando decorators para alterar o construtor da classe
@logarObjeto
class Geladeira {
    constructor(){
        console.log("Geladeira")
    }
}

type Construtor = { 
    new(...args: any[]): {} 
}

function logarObjeto(constructor: Construtor){
    console.log("Carregado")

    return class extends constructor {
        constructor(...args: any[]){
            console.log("Antes...")
            super(...args)
            console.log("Depois...")
        }
    }
}

new Geladeira()


//Adicionando métodos na classe via decorator
interface Fogao {
    imprimir?(): void
}

@imprimivel
class Fogao {
    constructor(){
        console.log("Fogão")
    }
}

function imprimivel(constructor: Function){
    constructor.prototype.imprimir = function(){
        console.log(this)
    }
}

const eletro = new Fogao()
eletro.imprimir && eletro.imprimir()



// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'João Gabriel',
    email: 'joaogkvalho@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

//Minha versão da resolução
function perfilAdmin(_: Function){
    if(usuarioLogado.admin != true || !usuarioLogado){
        throw new Error("Permissão Negada")
    }
}

//Versão do professor da resolução
function perfilAdmin2<T extends Construtor>(constructor: T){
    return class extends constructor {
        constructor(...args: any[]){
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin){
                throw new Error("Sem Permissão")
            }
        }
    }
}
    
 
new MudancaAdministrativa().critico()


//Decorator de métodos, atributos e parâmetros
class ContaCorrente {
    @naoNegativo
    private saldo: number

    constructor(saldo: number){
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number){
        if(valor < this.saldo){
            this.saldo -= valor
            return true
        } else {
            return false
        }
    }

    @congelar
    getSaldo(){
        return this.saldo
    }
}

const cc = new ContaCorrente(10000)

console.log(cc.getSaldo())
cc.sacar(5000)
console.log(cc.getSaldo())

// cc.getSaldo = function(){
//     return this['saldo'] + 7000
// }

//Decorator de métodos
function congelar(alvo: any, nomePropriedade: string, descriptor: PropertyDescriptor){
    console.log(alvo)
    console.log(nomePropriedade)

    descriptor.writable = false
}


//Decorator de atributo
function naoNegativo(alvo: any, nomePropriedade: string){
    delete alvo[nomePropriedade]

    Object.defineProperty(alvo, nomePropriedade, {
        get: function(): any{
            return alvo["_" + nomePropriedade]
        },
        set: function(valor: any): void{
            if(valor < 0){
                throw new Error("Saldo inválido")
            } else {
                alvo["_" + nomePropriedade] = valor
            }
        }
    })
}


//Decorator de parâmetro de função
function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number){
    console.log(`Alvo: ${alvo}`)
    console.log(`Método: ${nomeMetodo}`)
    console.log(`Indice: ${indiceParam}`)
}