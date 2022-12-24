// String
let nome = 'Joao'
console.log(nome)

// Number
let n1 = 10
console.log(n1)

// Boolean
let possuiHobbies = true
console.log(possuiHobbies)

// Array
let meusHobbies: any[] = ["Jogar", "Comer", "Dormir"]
console.log(meusHobbies[0])

meusHobbies = [100, 200, 300]
console.log(meusHobbies[0])

// Tuplas
// Array que possui tipos especificos dentro
let endereco: [string, number] = ["rua joao pessoa", 14]

console.log(endereco)

// Enum
enum Cor {
    Verde,
    Vermelho,
    Azul,
    Preto,
    Branco
}

let minhaCor: Cor = Cor.Azul
console.log(minhaCor)

// Any
let carro: any = 'Fiat'
console.log(carro)

carro = {marca: 'Fiat', ano: 2012}
console.log(carro)

//Tipo Função
let calculo: (n1: number, n2: number) => number
calculo = mutiplicar

console.log(calculo(10, 10))


//Tipo Objeto
let user: { name: string, age: number }

user = {
    name: 'Joao',
    age: 20
}

console.log(user)


//Tipo Never
function falha(msg: string): never{
    throw new Error(msg)
}

const produto = {
    nome: 'Banana',
    preco: 10,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('Nome do produto inválido')
        }
        if(this.preco <= 0){
            falha('Preço inválido')
        }
    }
}

produto.validarProduto()


// Tipos explícitos

// quando uma variavel é somente criada ou não é passado nenhum
// tipo, é atribuído a ela um tipo explícito(any).
let minhaIdade

minhaIdade = 20
minhaIdade = 'a minha idade é 20 anos'

console.log(minhaIdade)
console.log(typeof minhaIdade)


// Funções
function returnMyName(): string{
    return nome
}

console.log(returnMyName())


//Função sem retorno
function sayHello(): void{
    console.log('Hello')
}

sayHello()


//Tipagem de parametros
function mutiplicar(n1: number, n2: number): number{
    return n1 * n2
}

console.log(mutiplicar(2, 10))


//Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (num: number) => string
}


//Union Types
let nota: string | number = 10
console.log(`A minha note é ${nota}!`)

nota = '10'
console.log(`A minha nota é ${nota}!`)


//Checagem de Tipos
let num = 30

//Checagem dentro do meio TS é automática
// num = true (Erro)

//Checagem dentro do meio JS
if(typeof num === "number"){
    console.log("É um numero")
} else {
    console.log(typeof num)
}



//DESAFIO OBJETO FUNCIONÁRIO
const supervisores = [
    'Joao',
    'Gabriel'
]

function baterPonto(num: number): string{
    if(num <= 8){
        return 'Ponto Normal'
    } else {
        return 'Fora de horário'
    }
}

let funcionario: Funcionario = {
    supervisores,
    baterPonto
}

console.log(funcionario.baterPonto(8))



//DESAFIO TRANSFORMAR JS EM TS
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
   saldo: 2000,
   depositar(valor: number){
        this.saldo += valor
   }
}

let correntista: Correntista = {
    nome: 'João Gabriel',
    contaBancaria: contaBancaria,
    contatos: ['58208604', '958622986']
}

contaBancaria.depositar(5000)
console.log(correntista.nome)
console.log(correntista.contaBancaria.saldo)