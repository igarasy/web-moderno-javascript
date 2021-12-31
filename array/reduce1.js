/* Ele executa uma função reducer para cada elemento do array
O valor de retorno é atribuito ao acumulador, que é repassado para cada iteração subqsequente 

A função callback irá receber 4 argumentos:
1- acumulador - valor inicial (ou o valor do callback anterior),
2- valorAtual - o valor do elemento atual
3- index - o índice atual e
4- array - o array onde a iteração está ocorrendo.
*/

const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

/* A função map chama a função callback para cada elemento do array */

/*Nesse caso a função callback que passamos para o reduce 
ela irá pegar o acumulador (como não passamos valores será o elemento de indice 0) e o atual seria o próximo elemento de indice 1 
Ele irá somar os 2 primeiros elementos(indice 0 e 1), retornar como o acumulador e somar com o atual, que seria o elemento do próximo indice(indice 3)
*/
const resultado = alunos
  .map(a => a.nota)
  .reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
  }, 0)

console.log(resultado)
