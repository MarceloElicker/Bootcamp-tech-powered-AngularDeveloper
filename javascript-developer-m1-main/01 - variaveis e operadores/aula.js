
//let variavel = 10;

//console.log(variavel);

//Faça um programa para calcular o valor de uma viagem.

//Você terá 3 variáveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;

//Imprima no console o valor que será gasto para realizar esta viagem.

let valorCombustivel = 5.79;
const kilometroRodadoPLitro = 12;
let distacia = 100;

const litrosGasto = distacia / kilometroRodadoPLitro;
const valorGasto = (distacia/kilometroRodadoPLitro) * valorCombustivel;

console.log(litrosGasto.toFixed(2) + ' Litros de combustível');
console.log(valorGasto.toFixed(2) + ' Reais gastos');
