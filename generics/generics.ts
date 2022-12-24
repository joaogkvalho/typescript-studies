//Função comum utilizando o tipo any
function echo(objeto: any){
    return objeto
}

console.log(echo("João").length)
console.log(echo(20))
console.log(echo({ nome: "João", idade: 20 }))


//Função utilizando o tipo genérico
function echoMelhorado<type>(objeto: type): type{
    return objeto
}

//No momento da execução da funcão o tipo "string" é atribuido ao parâmetro por conta do generics
console.log(echoMelhorado("Gabriel"))

//Tipo "number" atribuído ao parâmetro
console.log(echoMelhorado(20))

//Podemos também atribuir um tipo específo no momento da chamada da função através dos generics
console.log(echoMelhorado<number>(15))

//Tipo "object" atribuído ao parâmetro
console.log(echoMelhorado({ name: "Gabriel", idade: 20 }))


//Generics com Arrays
const avaliacoes: Array<number> = [10, 5.5, 7.5]

avaliacoes.push(8.5)
avaliacoes.push(9.5)
// avaliacoes.push("6") Erro

console.log(avaliacoes)


function imprimir<T>(args: T[]){
    return args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])

imprimir<number>([1, 2, 3])
imprimir<string>(['joão', 'lucas', 'gabriel'])

imprimir<{ nome: string, idade: number }>([
    { nome: 'Ana', idade: 16 },
    { nome: 'João', idade: 20 }
])

type Aluno = {
    nome: string
    idade: number
}

imprimir<Aluno>([
    { nome: 'Lucas', idade: 18 }
])


//Tipo Genérico
type Echo = {
    <T>(arg: T): T
}

const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Hello World'))


//Generics com classes
abstract class operacaoBinaria<T, R> {
    constructor(
        public operando1: T,
        public operando2: T
    ){}

    abstract executar(): R
}

// console.log(new OperacaoBinaria("Bom ", "dia").executar())
// console.log(new OperacaoBinaria(1, 2). executar())
// console.log(new OperacaoBinaria({}, {}).executar())

class somaBinaria extends operacaoBinaria<number, number> {
    executar(): number{
        return this.operando1 + this.operando2
    }
}

console.log(new somaBinaria(5, 10).executar())

class concaBinaria extends operacaoBinaria<string, string> {
    executar(): string {
        return this.operando1 + this.operando2
    }
}

console.log(new concaBinaria("Bom ", "dia").executar())


//Exemplo mais complexo de gererics com classes
class Data02 {
    constructor(
        public dia: number,
        public mes: number,
        public ano: number
    ){}
}

class DiferencaEntreDatas extends operacaoBinaria<Data02, string> {
    getTime(data: Data02): number {
        let { dia, mes, ano } = data

        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)

        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24

        return `${Math.ceil(diferenca / dia)} dia(s)` 
    }
}

const d1 = new Data02(26, 3, 2022)
const d2 = new Data02(28, 6, 2022)

console.log(new DiferencaEntreDatas(d1, d2).executar())


//Desafio Classe Fila
class Fila<tipo extends string | number> {
    private fila: Array<tipo>

    constructor(...args: tipo[]){
        this.fila = args
    }

    entrar(item: tipo){
        this.fila.push(item)
    }

    proximo(item: tipo){
        this.fila.splice(this.fila.indexOf(item) + 1, 1)
    }

    imprimir(){
        console.log(this.fila)
    }
}

const fila1 = new Fila<string>("João", "Ana", "Lucas")
fila1.imprimir()

fila1.entrar("Roberto")
fila1.imprimir()

fila1.proximo("Lucas")
fila1.imprimir()


// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
type Par<C, V> = {  
    chave: C
    valor: V
}

class Mapa<C, V>{
    itens: Array<Par<C, V>> = new Array<Par<C, V>>()

    obter(chave: C){
        const result = this.itens.filter(i => i.chave === chave)

        return result ? result[0] : null
    }

    colocar(par: Par<C, V>){
        const encontrado = this.obter(par.chave)

        if(encontrado){
            encontrado.valor = par.valor
        } else {
            this.itens.push(par)
        }
    }

    limpar(){
        this.itens = new Array<Par<C, V>>
    }

    imprimir(){
        console.log(this.itens)
    }
}

const mapa = new Mapa<number, string>()

mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.imprimir()

mapa.colocar({ chave: 1, valor: 'Gustavo' })
mapa.imprimir()
 
console.log(mapa.obter(3))

mapa.limpar()
mapa.imprimir()
