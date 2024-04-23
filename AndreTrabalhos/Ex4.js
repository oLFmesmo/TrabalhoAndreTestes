// Função para validar CPF
function validarCPF(cpf) {
    // Removendo caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verificando se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verificando se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Calculando os dígitos verificadores
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

// Exportando a função de validação de CPF
module.exports = validarCPF;
