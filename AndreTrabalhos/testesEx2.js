const assert = require('assert');
const verificarPalindromo = require('./Ex2');

console.log("Palavras que sao palindromos:");
let palindromos = ["arara", "reviver", "radar", "asa"];
palindromos.forEach(palindromo => {
    assert.strictEqual(verificarPalindromo(palindromo), true);
    console.log(`${palindromo} é um palidromo`);
});

console.log("\nPalavras que nao sao palindromos:");
let naoPalindromos = ["academia", "agua", "janta", "dormir"];
naoPalindromos.forEach(naoPalindromo => {
    assert.strictEqual(verificarPalindromo(naoPalindromo), false);
    console.log(`${naoPalindromo} não é um palidromo`);
});
