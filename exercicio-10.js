
const custoFinal = () => {
    const custoCarro = getInput().custo;
    let dist = 28;
    let imposto = 45;
    let preco = { totalDist, porcImpos } = {
        totalDist: (dist*(custoCarro/100)).toFixed(2),
        porcImpos: (imposto*(custoCarro/100)).toFixed(2)
    }
    let custoTotal = (parseInt(custoCarro) + parseInt(preco.totalDist) + parseInt(preco.porcImpos));
    output.innerHTML += `Preço total do carro: ${custoTotal}.\n`;
}
