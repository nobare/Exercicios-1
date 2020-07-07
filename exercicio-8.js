
const election = () => {
    const data = getInput();
    let total = (parseInt(data.branco) + parseInt(data.nulo) + parseInt(data.valid));
    let porc = { branco, nulo, valido } = {
        branco: (data.branco/(total/100)).toFixed(2),
        nulo: (data.nulo/(total/100)).toFixed(2),
        valido: (data.valid/(total/100)).toFixed(2)
    }
    output.innerHTML += `Do total de ${total} votos. ${porc.branco}(${data.branco})% Foram votos em branco, ${porc.nulo}(${data.nulo})% foram anulados e ${porc.valido}(${data.valid}) foram validos.\n`;
};