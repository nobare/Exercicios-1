let expect = require('chai').expect;
const exercicio6 = require('../exercicio-6');
//const exercicio7 = require('../exercicio-7');
//const exercicio8 = require('../exercicio-8');
const exercicio9 = require('../exercicio-9');
//const exercicio10 = require('../exercicio-10');
//const exercicio11 = require('../exercicio-11');
//const exercicio12 = require('../exercicio-12');
const exercicio13 = require('../exercicio-13');
//const exercicio14 = require('../exercicio-14');
//const exercicio16 = require('../exercicio-16');
//const exercicio17 = require('../exercicio-17');
//const exercicio18 = require('../exercicio-18');
const exercicio19 = require('../exercicio-19');
const exercicio20 = require('../exercicio-20');
const exercicio21 = require('../exercicio-21');
const exercicio22 = require('../exercicio-22');
const exercicio23 = require('../exercicio-23');
const exercicio24 = require('../exercicio-24');
//const exercicio25 = require('../exercicio-25');

describe(` 
Exercicio 6
Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a
área do retângulo. 
`, function (){
  it('Área do primeiro triangulo', function(){
    const result = exercicio6(10, 5)
    expect(result).be.equal(25)
  })
});

describe(` 
Exercicio 7
Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 
`, function (){
  it('Idade em dias', function(){
    const result = exercicio7(10, 5)
    expect(result).be.equal(25)
  })
});

describe(` 
Exercicio 9
Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
Calcular e escrever o valor do novo salário. 
`, function (){
  it('Novo salario (1000, 5)', function(){
    const novoSalario = exercicio9(1000, 5)
    expect(novoSalario).be.equal(1050)
  })
  it('Novo salario (2000, 10)', function(){
    const novoSalario = exercicio9(2000, 10)
    expect(novoSalario).be.equal(2200)
  })
});

describe(` 
Exercicio 13
Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
final é: 
`, function (){
  it('Média final', function(){
    const mediaFinal = exercicio13(7, 5, 10)
    expect(mediaFinal).be.equal(7.9)
  })
});

describe(` 
Exercicio 19
Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.  
`, function (){
  it('Numero Maior', function(){
    const numeroMaior = exercicio19(10, 5)
    expect(numeroMaior).be.equal(10)
  })
});

describe(` 
Exercicio 20
Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. 
`, function (){
  it('Ordem Crescente', function(){
    const ordemCrescente = exercicio20(10, 5)
    expect(ordemCrescente).be.equal('10, 5')
  })
});

describe(` 
Exercicio 21
Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
  minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
  de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.
`, function (){
  it('Duração do Xadrez', function(){
    const duracaoXadrez = exercicio21(15, 9)
    expect(duracaoXadrez).be.equal(24)
  })
});

describe(` 
Exercicio 22
A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
(considere que o mês possua 4 semanas exatas). 
`, function (){
  it('Salario Mensal', function(){
    const salarioMensal = exercicio22(50, 10)
    expect(salarioMensal).be.equal(2200)
  })
});

describe(` 
Exercicio 23
Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
e mostre seu peso ideal, utilizando as seguintes fórmulas:
`, function (){
  it('Peso Ideal', function(){
    const pesoIdeal = exercicio23(1.80, 'Masculino')
    expect(pesoIdeal).be.equal(71.78)
  })
});

describe(` 
Exercicio 24
Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total.
`, function (){
  it('Salario Total', function(){
    const salarioTotal = exercicio24(1000, 2000)
    expect(salarioTotal).be.equal(1070)
  })
  
  it('Salario Total 2', function(){
    const salarioTotal = exercicio24(2500, 70000)
    expect(salarioTotal).be.equal(5970)
  })
});


