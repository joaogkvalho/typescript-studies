"use strict";
var Areas;
(function (Areas) {
    const PI = 3.14;
    function areaCircunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.areaCircunferencia = areaCircunferencia;
})(Areas || (Areas = {}));
