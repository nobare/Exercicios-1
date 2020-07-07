module.exports = function (salario, reajuste){
  let novoSalario = salario + (( salario/100 ) * reajuste );
  return novoSalario;
}