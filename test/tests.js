let expect = require('chai').expect;
const exercicio6 = require('../exercicio-6');
const exercicio7 = require('../exercicio-7');
const exercicio8 = require('../exercicio-8');
const exercicio9 = require('../exercicio-9');
const exercicio10 = require('../exercicio-10');
const exercicio11 = require('../exercicio-11');
const exercicio12 = require('../exercicio-12');
const exercicio13 = require('../exercicio-13');
const exercicio14 = require('../exercicio-14');
const exercicio16 = require('../exercicio-16');
const exercicio17 = require('../exercicio-17');
const exercicio18 = require('../exercicio-18');
const exercicio19 = require('../exercicio-19');
const exercicio20 = require('../exercicio-20');
const exercicio21 = require('../exercicio-21');
const exercicio22 = require('../exercicio-22');
const exercicio23 = require('../exercicio-23');
const exercicio24 = require('../exercicio-24');
const exercicio25 = require('../exercicio-25');
const exercicio26 = require('../exercicio-26');
const exercicio27 = require('../exercicio-27');
const exercicio28 = require('../exercicio-28');
const exercicio29 = require('../exercicio-29');
const exercicio30 = require('../exercicio-30');
const exercicio31 = require('../exercicio-31');
const exercicio32 = require('../exercicio-32');
const exercicio33 = require('../exercicio-33');

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
    const idadeTotal = exercicio7(1, 3, 10)
    expect(idadeTotal).be.equal(465)
  })
});

describe(` 
Exercicio 8
Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total
de eleitores. 
`, function (){
  it.only('porcentual', function(){
    const idadeTotal = exercicio7(3, 3, 3)
    expect(idadeTotal).be.equal(33, 33, 33)
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
Exercicio 10
O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
calcular e escrever o custo final ao consumidor. 
`, function (){
  it('Média final', function(){
    const mediaFinal = exercicio10(7, 5, 10)
    expect(mediaFinal).be.equal(7.9)
  })
});

describe(` 
Exercicio 11
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.
`, function (){
  it('Média final', function(){
    const mediaFinal = exercicio11(7, 5, 10)
    expect(mediaFinal).be.equal(7.9)
  })
});

describe(` 
Exercicio 12
Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
correspondente em graus Celsius (baseado na fórmula abaixo):
`, function (){
  it('Média final', function(){
    const mediaFinal = exercicio12(7, 5, 10)
    expect(mediaFinal).be.equal(7.9)
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
Exercicio 14
Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso
contrário escrever NÃO É MAIOR QUE 10! 
`, function (){
  it('Média final', function(){
    const mediaFinal = exercicio14(7, 5, 10)
    expect(mediaFinal).be.equal(7.9)
  })
});

describe(` 
Exercicio 15
Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 
`, function (){
  it('Média final', function(){
    const mediaFinal = exercicio15(7, 5, 10)
    expect(mediaFinal).be.equal(7.9)
  })
});

describe(` 
Exercicio 16
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra
`, function (){
  it('Média final', function(){
    const mediaFinal = exercicio16(7, 5, 10)
    expect(mediaFinal).be.equal(7.9)
  })
});

describe(` 
Exercicio 17
Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
aluno é aprovado). Escrever também a média calculada. 
`, function (){
  it('Média final', function(){
    const mediaFinal = exercicio17(7, 5, 10)
    expect(mediaFinal).be.equal(7.9)
  })
});

describe(` 
Exercicio 18
Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 
`, function (){
  it('Média final', function(){
    const mediaFinal = exercicio18(7, 5, 10)
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

describe(` 
Exercicio 26
Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
compra'. 
`, function (){
  it('Salario Total', function(){
    const salarioTotal = exercicio26(1000, 2000)
    expect(salarioTotal).be.equal(1070)
  })
});

describe(` 
Exercicio 27
Ler um valor e escrever se é positivo, negativo ou zero.
`, function (){
  it('Salario Total', function(){
    const salarioTotal = exercicio27(1000, 2000)
    expect(salarioTotal).be.equal(1070)
  })
});

describe(` 
Exercicio 28
Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 
`, function (){
  it('Salario Total', function(){
    const salarioTotal = exercicio28(1000, 2000)
    expect(salarioTotal).be.equal(1070)
  })
});

describe(` 
Exercicio 29
Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
maiores. 
`, function (){
  it('Salario Total', function(){
    const salarioTotal = exercicio29(1000, 2000)
    expect(salarioTotal).be.equal(1070)
  })
});

describe(` 
Exercicio 30
Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
crescente. 
`, function (){
  it('Salario Total', function(){
    const salarioTotal = exercicio30(1000, 2000)
    expect(salarioTotal).be.equal(1070)
  })
});

describe(` 
Exercicio 31
Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
dos outros 2 lados
`, function (){
  it('Salario Total', function(){
    const salarioTotal = exercicio31(1000, 2000)
    expect(salarioTotal).be.equal(1070)
  })
});

describe(` 
Exercicio 32
Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 
`, function (){
  it('Salario Total', function(){
    const salarioTotal = exercicio32(1000, 2000)
    expect(salarioTotal).be.equal(1070)
  })
});

describe(` 
Exercicio 33
Ler dois valores e imprimir uma das três mensagens a seguir:
‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
‘Segundo maior’, caso o segundo seja maior que o primeiro. 
`, function (){
  it('Salario Total', function(){
    const salarioTotal = exercicio33(1000, 2000)
    expect(salarioTotal).be.equal(1070)
  })
});

describe(` 
Exercicio 25
Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 
`, function (){
  it('Salario Total', function(){
    const salarioTotal = exercicio25(1000, 2000)
    expect(salarioTotal).be.equal(1070)
  })
});