// Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
const dobro = function(valor: number): number {
return valor * 2
}
console.log(dobro(10))


// Verifique se há espaço para melhorias nesse trecho de código!
const dizerOla = function(nome: string = "Pessoa"): void {
    console.log(`Olá ${nome}`)
}

dizerOla()
dizerOla("Anna")


// Dado esse array, imprima o menor valor!
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))


// Adicione os elementos de nums em array !
const numeros = [-3, 33, 38, 5]
const array = [55, 20, ...nums]
console.log(array)


// Simplifique os trechos de código abaixo utilizando o operador Destructuring!
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

const cientista = {primeiroNome: "Will", experiencia: 12}
const { primeiroNome, experiencia } = cientista
console.log(primeiroNome, experiencia)