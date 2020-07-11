module.exports = function (branco, nulo, validos){
    let total = branco + nulo + validos;
    let porcentagem = { branco, nulo, validos } = {
        branco: branco/(total/100).toFixed(2),
        nulo: nulo/(total/100).toFixed(2),
        validos: validos/(total/100).toFixed(2)
    }
    return porcentagem
};
