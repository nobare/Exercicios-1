 module.exports = function(custoCarro){
    let distribuiçao = 28*(custoCarro/100);
    let imposto = 45*(custoCarro/100);
    let total = (custoCarro + distribuiçao + imposto);
    return total;
}
