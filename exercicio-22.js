module.exports = function (horaSemanal, salarioHora){
  if (horaSemanal > 40) {
    horaExtra = (horaSemanal - 40)
    salarioExtra = (salarioHora * 0.5) + salarioHora;
    return salarioMensal = ((salarioHora * 40) + (horaExtra * salarioExtra)) * 4;
  }	return salarioMensal = (horaSemanal * salarioHora) * 4;
}

