const assert = require('assert');
const ordenarLista = require('./Ex6');

console.log("Testando ordenarLista:");

// teste pra crescente
try {
    const listaCrescente = [4, 2, 7, 1, 9];
    const listaOrdenadaCrescente = ordenarLista(listaCrescente);
    assert.deepStrictEqual(listaOrdenadaCrescente, [1, 2, 4, 7, 9]);
    console.log("Crescente:", listaOrdenadaCrescente);
} catch (error) {
    console.error("deu erro na crescente:", error);
}

// Teste pra decrescente
try {
    const listaDecrescente = [4, 2, 7, 1, 9];
    const listaOrdenadaDecrescente = ordenarLista(listaDecrescente, 'decrescente');
    assert.deepStrictEqual(listaOrdenadaDecrescente, [9, 7, 4, 2, 1]);
    console.log("Decrescente:", listaOrdenadaDecrescente);
} catch (error) {
    console.error("deu erro na decrescente:", error);
}

// um teste pra dar erro
try {
    const lista = [4, 2, 7, 1, 9];
    ordenarLista(lista, 'invalida');
    console.error("a lista errada deu certo???");
} catch (error) {
    console.log("a lista errada deu errado entao tudo certo, ", error.message);
}
