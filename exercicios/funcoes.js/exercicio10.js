/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
 */

const verficiaMaiorOuIgual = (primeiroNumero, segundoNumero) => {
  if (primeiroNumero >= segundoNumero) {
    console.log(
      `O primeiro número é: ${primeiroNumero} e por isso é maior que o segundo que é: ${segundoNumero}`
    )
  } else
    console.log(
      `O segundo número é: ${segundoNumero} e por isso é maior ou igual ao primeiro que é: ${primeiroNumero}`
    )
}

verficiaMaiorOuIgual(1, 2)
