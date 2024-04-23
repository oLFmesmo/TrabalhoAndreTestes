const assert = require('assert');
const { verificarPrimo } = require('./Ex5');

console.log("\nTestando números primos:");
let primos = [2, 3, 5, 7, 11];
primos.forEach(numero => {
    assert.strictEqual(verificarPrimo(numero), true);
    console.log(`${numero} É primo e pronto tlg`);
});

console.log("Testando números não primos:");
let naoPrimos = [4, 6, 8, 9, 10];
naoPrimos.forEach(numero => {
    assert.strictEqual(verificarPrimo(numero), false);
    console.log(`${numero} Não é primo maluco`);
});
