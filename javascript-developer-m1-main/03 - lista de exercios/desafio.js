
/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/



const nota1=7;
const nota2=8;
const nota3=7;
const media = (nota1+nota2+nota3) / 3;

if(media < 5){
    console.log(`Você foi reprovado, sua nota foi: ${media.toFixed(2)}`)
}else if(media >= 5 && media < 7){
    console.log(`Você esta em recuperação, sua nota foi: ${media.toFixed(2)}`)
}else{
    console.log(`Parabéns você foi aprovado, sua nota foi: ${media.toFixed(2)}`)
}




/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/


const peso = 120
const altura = 1.70

const imc = peso / Math.pow(altura,2)
console.log(imc.toFixed(2))

if (imc < 18.5){
    console.log(`Você esta abaixo do pesso, seu IMC é de: ${imc.toFixed(2)}`)
}else if (imc >= 18.5 && imc < 25){
    console.log(`Você esta com peso normal, seu IMC é de: ${imc.toFixed(2)}`)
}else if (imc >=25 && imc < 30){
    console.log(`Você esta acima do pesso, seu IMC é de: ${imc.toFixed(2)}`)
}else if (imc >= 30 && imc < 40){
    console.log(`Você esta obeso, seu IMC é de: ${imc.toFixed(2)}`)
}else{
    console.log(`Você esta obesidade grave, seu IMC é de: ${imc.toFixed(2)}`)
}



/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1- À vista Débito, recebe 10% de desconto;
    2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3- Em duas vezes, preço normal de etiqueta sem juros;
    4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


const valor = 100;
const formaDePagamento = 1;

if (formaDePagamento === 1){
    console.log(`À vista no Débito, recebe 10% de desconto e o valor pago será de: R$ ${(valor - (valor * .10)).toFixed(2)}`);
}else if (formaDePagamento === 2){
    console.log(`À vista no Dinheiro ou PIX, recebe 15% de desconto e o valor pago será de: R$ ${(valor - (valor * .15)).toFixed(2)}`);
}else if (formaDePagamento === 3){
    console.log(`Em duas vezes, preço normal de etiqueta sem juros: R$ ${valor.toFixed(2)}`);
}else if (formaDePagamento === 4){
    console.log(`À vista no Débito, recebe 10% de desconto e o valor pago será de: R$ ${(valor + (valor * .10)).toFixed(2)}`);
}else{
    console.log(`Digite um numero entre 1 e 4`);
}

