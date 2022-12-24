//Namespaces
//são uma forma de organizar o código de maneira
//que fuja do escopo global, sendo assim possivel exportar e
//importar o código de dentro deles
console.log(Areas.areaCircunferencia(8))
console.log(Areas.areaRetangulo(8, 5))

//Namespaces aninhados
namespace Geometria {
    export namespace Perimetro {
        export function quadrado(base: number, altura: number): number{
            return (base + altura) * 2
        }
    }
}

console.log(Geometria.Perimetro.quadrado(5, 5))