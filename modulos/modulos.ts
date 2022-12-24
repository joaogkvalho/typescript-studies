// import { areaCircunferencia } from './circunferencia'
// import { areaRetangulo } from './retangulo'
import { areaCircunferencia as circ } from './circunferencia'
import retangulo from './retangulo'

console.log("Módulos carregados...")
console.log(circ(4))
console.log(retangulo(8, 5))

const { digaOi } = require('./novo')
console.log(digaOi('João'))