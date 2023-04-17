/*
function escrevaSeuNome (nome){
    console.log(`Meu nome é: ${nome}`);
}
escrevaSeuNome('Marcelo');
escrevaSeuNome('Marcelo Elicker');
escrevaSeuNome('Marcelo Elicker Martins');
*/

//Função para ver se sou maior de idade
/*
function maiorIdade (nome, idade){
    if(idade >= 18){
        console.log(`${nome} você tem ${idade} e é maior de idade.`);
    }else{
        console.log(`${nome} você tem ${idade} e é menor de idade.`);
    }
}
maiorIdade('Marcelo Elicker', 37);
maiorIdade('Isis Elicker', 2);
*/


//função MAIN para forma de pagamentos

function aplicarDesconto (valor, desconto){
    return valor - (valor * (desconto/100)); 
}

function aplicarJuros (valor, juros){
    return valor + (valor * (juros/100)); 
}

const precoEtiqueta = 100
const formaDePgt = 5


if (formaDePgt === 1){
    console.log(aplicarDesconto (precoEtiqueta, 10));
}else if (formaDePgt === 2){
    console.log(aplicarDesconto (precoEtiqueta, 15));
}else if (formaDePgt === 3){
    console.log(aplicarDesconto (precoEtiqueta, 0));
}else if(formaDePgt === 4){
    console.log(aplicarJuros (precoEtiqueta, 10));
}else{
    console.log('Digite um valore ente 1 e 4');
}

//Text