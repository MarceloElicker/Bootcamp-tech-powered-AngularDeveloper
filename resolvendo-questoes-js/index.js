// 1. Faça um algoritmo que receba dois números e exiba o resultado da sua soma;
/*
const num1 = 10;
const num2 = 20;

const soma = num1 + num2
console.log(soma)
*/


//2. Faça um algoritmo que receba dois números e ao final mostre a soma, subtração, multiplicação e a divisão dos dois números lidos;

/*
const num1 = 100;
const num2 = 20;

const resultado = '*'

if (resultado === '+'){
    console.log(num1 + num2)
}else if(resultado === '-'){
    console.log(num1 - num2)
}else if(resultado === '*'){
    console.log(num1 * num2)
}else if(resultado === '/'){
    console.log(num1 / num2)
}
*/

//3. Escreva um algoritmo para determinar o consumo médio de um automóvel sendo fornecida a distância total percorrida pelo automóvel e o total de combustível gasto;

/*
const distanciaPercorrida = 120;
const gastoCombustivel = 10

const consumoMedio = distanciaPercorrida / gastoCombustivel;
console.log(`foi realizado uma média de ${consumoMedio} Km por litro de combustivel`);
*/


//4. Escreva um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o seu nome, o salário fixo e salário no final do mês;

/*
const vendedor = 'Marcelo';
const salario = 2800;
const vendasTotal = 8000;

const salarioFinal = salario + (vendasTotal * .15);
console.log(`Salário final do ${vendedor} foi de: ${salarioFinal}`);
*/


//5. Escreva um algoritmo que leia o nome de um aluno e as notas das três provas que ele obteve no semestre. No finalinformar o nome do aluno e a sua média (aritmética);


/*
const aluno = 'Marcelo'
const nota1 = 8;
const nota2 = 7;
const nota3 = 6;


const media = (nota1+nota2+nota3) / 3;
console.log(`O aluno ${aluno} obteve uma média final de: ${media.toFixed(2)}`);
*/


//6. Leia dois valores para as variáveis A e B, e efetuar as trocas dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados; 

/*
let aux = 0
let a = 10;
let b = 20;
console.log(`Variável a= ${a} e Variável b= ${b}`);

aux = a
a = b;
b = aux;
console.log(`$Variável a= ${a} e Variável b= ${b}`);
*/