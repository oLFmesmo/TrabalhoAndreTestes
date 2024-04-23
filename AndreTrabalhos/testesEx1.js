const calculadora = require('./Ex1');
const assert = require('assert');

console.log(calculadora.adicionar(5, 3)); // 8
console.log(calculadora.subtrair(5, 3)); // 2
console.log(calculadora.multiplicar(5, 3)); // 15
console.log(calculadora.dividir(6, 3)); // 2

console.log("Todos os testes passaram com sucesso!");