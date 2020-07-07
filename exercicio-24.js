module.exports = function(salarioFixo, valorVendasEfetuadas) {
    if (valorVendasEfetuadas > 1500) {
        comissao = 45;
        comissaoExtra = (valorVendasEfetuadas - 1500) * 0.05;
        return salarioFixo + comissao + comissaoExtra
    } else {
        comissao = valorVendasEfetuadas * 0.03;
        return salarioFixo + comissao;
    }
}