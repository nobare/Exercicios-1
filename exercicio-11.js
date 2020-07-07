
const salFinal = () => {
    const {salario, qntCarro, priceCar} = getInput();
    comisQnt = qntCarro * 200;
    let comissao = priceCar.reduce((accum, pie) => {
        let comiss = ( pie/100 ) * 5;
        return comiss + accum;
    }, 0 );
    total = (salario + comissao + comisQnt);
    output.innerHTML += `Salario final de: ${total}.\n`;
}