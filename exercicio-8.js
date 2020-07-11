module.exports = function (branco, nulo, validos){
    let total = branco + nulo + validos;
    let porcentagem = { branco, nulo, validos } = {
        branco: parseInt(branco/(total/100)),
	    nulo: parseInt(nulo/(total/100)),
        validos: parseInt(validos/(total/100))
    }
    return porcentagem;
};
