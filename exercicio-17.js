
const notaMedia = () => {
    let {nota1, nota2} = getInput();
    let notaM = ((parseInt(nota1) + parseInt(nota2))/2);
    if ( notaM >= 6 ) {
        output.innerHTML += `Aluno aprovado com a nota média ${notaM}.\n`;
    } else {
        output.innerHTML += `Aluno reprovado com a nota média ${notaM}.\n`;
    }
}