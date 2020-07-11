module.exports = function(qntCarro, valorTotalVendas, salarioFixo,  valorPorQntCarro) {
   comissaoVendas = valorTotalVendas * 0.05;
   comissaoQntCarro = qntCarro * valorPorQntCarro;
    return salarioFixo + comissaoVendas + comissaoQntCarro;
}
