/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.*/

//Trabalhando 9 horas por dia, 20 dias no mês. 
//14 reais a hora trabalhada
const salarioEmUmMes = (horasTrabalhadas, valorPorHora) => {
  return `Salário igual a R$ ${horasTrabalhadas * valorPorHora}`
}
console.log(salarioEmUmMes(180, 14))
