//Classe padrão(sintaxe mais verbosa)
class Data {
    //Atributos públicos por padrão
    dia: number
    mes: number
    ano: number

    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(26, 2, 2002)
console.log(aniversario)


//Classe esperta(sintaxe reduzida), utilizando valores padrão
class Pessoa {
    constructor(
        public nome: string = "Jhon", 
        public idade: number = 16, 
        public isMan: boolean = true
    ){}
}

const joao = new Pessoa
console.log(joao)



//Desafio Classe Produto
class Produto {
    constructor(
        public nome: string, 
        public preco: number, 
        public desconto: number = 0
    ){}

    public precoComDesconto(): number{
        const valorDesconto = this.preco * this.desconto
        return Math.floor(this.preco - valorDesconto)
    }

    public resumo(): string{
        return `${this.nome} custa R$${this.precoComDesconto()} ${this.desconto * 100}% OFF`
    }
}

const prod1 = new Produto("Super Martelo", 500)
prod1.desconto = 0.8
console.log(prod1.resumo())

const prod2 = new Produto("Ultra Secador", 630, 0.5)
console.log(prod2.resumo())



//Exemplo mais complexo e classes usando modificadores de acesso (Private e Public)
class Moto {
    //Private(somente visível dentro da classe, não pode ser passado por herança)
    private velocidadeAtual: number = 0

    constructor(
        public marca: string, 
        public modelo : string,
        private velocidadeMaxima: number = 200
    ){}
    
    //Protected(somente visível dentro da classe mas é passado através de herança)
    protected alterarVelocidade(delta: number): number{
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    //Public(visível fora do escopo da classe)
    public acelerar(){
        return this.alterarVelocidade(5)
    }

    public frear(){
        return this.alterarVelocidade(-5)
    }
}

const moto1 = new Moto("Honda", "Pop100", 300)
Array(35).fill(0).forEach(() => moto1.acelerar())
console.log(moto1.acelerar())


//Herança(forma de passar atributos e metodos de uma classe pai para uma classe filho)
class Carro extends Moto {
    constructor(modelo: string, velocidadeMaxima: number){
        super('Fiat', modelo, velocidadeMaxima)
    }

    public acelerar(): number {
        return this.alterarVelocidade(50)
    }

    public frear(): number {
        return this.alterarVelocidade(-20)
    }
}

const carro1 = new Carro("Uno", 180)
console.log(`${carro1.marca}, ${carro1.modelo}`)

console.log(carro1.acelerar())
console.log(carro1.frear())


//Getters & Setters
class Usuario {
    private _idade: number = 0

    get idade(){
        return this._idade
    }

    set idade(valor: number){
        if(valor >= 0 && valor <= 18){
            this._idade = valor
        }
    }
}

const usuario1 = new Usuario

//Set
//Método que é interpretado como um atributo usado 
//para redefinir o valor de um atributo
usuario1.idade = 16

//Get
//Método que é interpretado como um atributo usado 
//para retornar o valor de uma atributo
console.log(usuario1.idade)



//Atributos e Métodos estáticos
//pertecem diretamente a classe pai e não as instâncias criadas a partir dela
class Matematica {
    static pi: number = 3.1416

    static areaDaCirc(raio: number): number{
        return Matematica.pi * raio * raio
    }
}

console.log(Matematica.areaDaCirc(4))


//Classes abstratas
//são classes que não podem ser instanciadas
//usadas para servir de herança para outras classes
abstract class Calculo {
    protected resultado: number = 0

    //Métodos abstratos são métodos inacabados que só finalizamos dentro das instâncias
    abstract executar(...numeros: number[]): void

    getResultado(): number{
        return this.resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

const calcSoma: Calculo = new Soma()
calcSoma.executar(2, 4, 6, 8)
console.log(calcSoma.getResultado())


class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

const calcMulti: Calculo = new Multiplicacao()
calcMulti.executar(2, 4, 5, 10)
console.log(calcMulti.getResultado())


//Construtor Privado & Singleton
class Unico {
    private static instance: Unico = new Unico

    private constructor(){}

    static getInstance(): Unico{
        return Unico.instance
    }  

    public getHours(){
        return new Date
    }
}

console.log(Unico.getInstance().getHours())


//Somente leitura
class Notebook {
    public readonly modelo: string

    constructor(modelo: string, public readonly marca: String){
        this.marca = marca
        this.modelo = modelo
    }   
}

const note1 = new Notebook("P086", "Asus")
console.log(note1)

// note1.marca = "HP" (ERRO)