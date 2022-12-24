"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { areaCircunferencia } from './circunferencia'
// import { areaRetangulo } from './retangulo'
const circunferencia_1 = require("./circunferencia");
const retangulo_1 = __importDefault(require("./retangulo"));
console.log("Módulos carregados...");
console.log((0, circunferencia_1.areaCircunferencia)(4));
console.log((0, retangulo_1.default)(8, 5));
const { digaOi } = require('./novo');
console.log(digaOi('João'));
