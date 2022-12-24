interface Humano {
    nome: string
    idade?: number //Atributo opcional dentro da interface
    [prop: string]: any //Declaração de atributo dinâmico
    saudar: (sobrenome: string) => void //Declaração de métodos dentro da interaface
}

function saudarComOla(humano: Humano){
    console.log(`Olá, ${humano.nome}`)
}

function mudarNome(humano: Humano){
    humano.nome = "Gabriel"
}

const humano: Humano = {
    nome: "João",
    idade: 20,
    saudar(sobrenome: string) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

saudarComOla(humano)
mudarNome(humano)
saudarComOla(humano)
humano.saudar("Carvalho")

// saudarComOla({ nome: "Lucas", idade: 16, altura: 1.68})


//Interfaces no contexto de classes
class Cliente implements Humano{
    nome: string = ''
    saudar(sobrenome: string){
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

const meuCliente = new Cliente()

meuCliente.nome = "João"
meuCliente.saudar("Carvalho")


//Interfaces com o tipo função
interface FuncaoCalculo {
    (a: number, b: number): number
}

const potencia: FuncaoCalculo = function(base: number, exp: number): number{
    return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 10))


//Herança com Interfaces
interface A {
    a: () => void
}

interface B {
    b: () => void
}

//Quando se trata de interfaces herdando interfaces se usa a palavra "extends"
interface ABC extends A, B {
    c: () => void
}

//Quando se trata de classes herdando interfaces se usa a palavra "implements"
class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}


//Quando uma classe abstrata herda uma interface se tem a necessidade de implementar
//todos os metodos que essa interface possui
abstract class RealABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}