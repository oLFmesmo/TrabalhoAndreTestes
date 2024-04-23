function verificarPalindromo(str) {
    // Removendo espaços em branco e convertendo para minúsculas
    str = str.toLowerCase().replace(/\s/g, '');
    
    // Verificando se a string é igual à sua versão reversa
    return str === str.split('').reverse().join('');
}

module.exports = verificarPalindromo;
