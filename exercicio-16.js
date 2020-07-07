
const precoCompra2 = () => {
    let qnt = getInput().qnt;
    let maior = qnt >= 12;
    let precoCompra = maior ? (qnt*1.0) : (qnt*1.3);
    output.innerHTML += `${qnt} Maças custaram ${precoCompra.toFixed(1)}\n ` 
}