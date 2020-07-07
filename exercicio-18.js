
const voteAge = () => {
    let idade = new Date().getFullYear() - getInput().anus;
    if ( idade >= 18) {
        output.innerHTML += `${idade} Anos de idade, pode votar.\n`;
        return true;
    } 
    output.innerHTML += `${idade} Anos de idade, Não pode votar.\n`
}
