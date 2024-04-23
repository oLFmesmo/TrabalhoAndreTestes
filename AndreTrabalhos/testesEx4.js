// testesEx4.js

const assert = require('assert');
const validarCPF = require('./Ex4');

let resultadoValidarCPF;

console.log("Testando validarCPF:");

// um cpf valido ai
try {
    resultadoValidarCPF = validarCPF('52998224725');
    assert.strictEqual(resultadoValidarCPF, true);
    console.log("CPF válido:", resultadoValidarCPF);
} catch (error) {
    console.error("CPF inválido:", error);
}

// falha com todos os dígitos iguais
try {
    resultadoValidarCPF = validarCPF('11111111111');
    assert.strictEqual(resultadoValidarCPF, false);
    console.log("CPF com todos os dígitos iguais:", resultadoValidarCPF);
} catch (error) {
    console.error("CPF inválido:", error);
}

// falha com dígito verificador inválido
try {
    resultadoValidarCPF = validarCPF('52998224726');
    assert.strictEqual(resultadoValidarCPF, false);
    console.log("CPF com dígito verificador inválido:", resultadoValidarCPF);
} catch (error) {
    console.error("CPF inválido:", error);
}

// falha com menos de 11 dígitos
try {
    resultadoValidarCPF = validarCPF('5299822472');
    assert.strictEqual(resultadoValidarCPF, false);
    console.log("CPF com menos de 11 dígitos:", resultadoValidarCPF);
} catch (error) {
    console.error("CPF inválido:", error);
}

// falha com mais11 dígitos
try {
    resultadoValidarCPF = validarCPF('529982247256');
    assert.strictEqual(resultadoValidarCPF, false);
    console.log("CPF com mais de 11 dígitos:", resultadoValidarCPF);
} catch (error) {
    console.error("CPF inválido:", error);
}

