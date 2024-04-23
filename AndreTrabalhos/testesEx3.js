const assert = require('assert');
const { celsiusParaFahrenheit, fahrenheitParaCelsius } = require('./Ex3');

let resultadoCelsiusParaFahrenheit;
let resultadoFahrenheitParaCelsius;

console.log("Testando celsiusParaFahrenheit:");
try {
    resultadoCelsiusParaFahrenheit = celsiusParaFahrenheit(0);
    assert.strictEqual(resultadoCelsiusParaFahrenheit, 32);
    console.log("Resultado:", resultadoCelsiusParaFahrenheit);
} catch (error) {
    console.error("Teste falhou:", error);
}

console.log("\nTestando fahrenheitParaCelsius:");
try {
    resultadoFahrenheitParaCelsius = fahrenheitParaCelsius(32);
    assert.strictEqual(resultadoFahrenheitParaCelsius, 0);
    console.log("Resultado:", resultadoFahrenheitParaCelsius);
} catch (error) {
    console.error("Teste falhou:", error);
}