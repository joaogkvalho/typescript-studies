"use strict";
//Namespaces
//são uma forma de organizar o código de maneira
//que fuja do escopo global, sendo assim possivel exportar e
//importar o código de dentro deles
console.log(Areas.areaCircunferencia(8));
console.log(Areas.areaRetangulo(8, 5));
//Namespaces aninhados
var Geometria;
(function (Geometria) {
    let Perimetro;
    (function (Perimetro) {
        function quadrado(base, altura) {
            return (base + altura) * 2;
        }
        Perimetro.quadrado = quadrado;
    })(Perimetro = Geometria.Perimetro || (Geometria.Perimetro = {}));
})(Geometria || (Geometria = {}));
console.log(Geometria.Perimetro.quadrado(5, 5));
