//noEmiteOnError, Atributo dentro do tsconfig.json que barra a criação de 
//um arquivo JS quando se tem um erro dentro do arquivo TS.
let marca: string = 'Nike'
let preco: number = 699

// marca = preco
console.log(marca)

//target, Atributo dentro do tsconfig.json quer permite alterar a versão 
//para qual o arquivo TS sera compilado.

//sourceMap, Atributo que dá acesso ao arquivo .ts que será lido pelo browser

//noImplicityAny, Atributo que vem como padrão sendo true, que identificará como
//erro  quando uma variavel possuir um any implícito 
function soma(a: any, b: any){
    return a + b
}


//strictNullChecks, Checa possíveis nulos dentro do fluxo da sua aplicação
//noUsedLocal, verifica variaveis locais que não estão sendo usadas na aplicação
//noUnusedParameters, Verifica se uma função possui parametros que não estão sendo utilizados
function saudar(isManha: boolean){
    let saudacao: string
    
    if(isManha){
        saudacao = 'Bom dia'
    } else {
        saudacao = 'Boa noite'
    }

    return saudacao
}