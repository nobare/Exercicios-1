module.exports = function (anos, meses, dias){
    anos *= 365;
    if (meses != 0) {
        meses *= 30;
        return total = (anos + meses + dias);
    } return (anos + dias);
}
