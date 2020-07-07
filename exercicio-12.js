
const celciusFahren = () => {
    let celcius = getInput().celcius;
    let convFahren = ((( celcius/5 ) *9 ) +32 ).toFixed(2);
    output.innerHTML += `${celcius} Graus Celcius são ${convFahren} graus Fahrenheit.\n`;
};


const fahrenCelcius = () => {
    let fahren = getInput().fahren;
    let convCelcius = ((( fahren-32 ) /9 ) *5 ).toFixed(2);
    output.innerHTML += `${fahren} graus Fahrenheit são ${convCelcius} graus Celcius.\n`
};