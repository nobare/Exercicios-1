module.exports = function (anos, meses, dias){
    const getAge = () => {
        let {anos, meses, dias} = getInput();
        anos *= 365;
        let dia = parseInt(dias);
        if (meses != 0) {
            meses *= 30;
            let total = (anos + meses + dia);
            output.innerHTML += `${total} dias de idade\n`
        } else {
            let total = (anos + dia);
            output.innerHTML += `${total} dias de idade\n`;
            }
        }
}