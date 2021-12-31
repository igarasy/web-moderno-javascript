/* O acumulador será o retorno da interação anterior, o resultado do que quisermos fazer no array

Após a função callback o reduce recebe o valorAtual, que será o valor que o  acumulador irá iniciar
*/
const aulas = [10, 25, 30]

const reduceAulas = aulas.reduce((acumulador, valorAtual, index, array) => {
  return valorAtual + acumulador
}, 0)
console.log(reduceAulas)

/*Podemos usar o reduce para achar o maior número do array, fazemos uma comparação do acumulador com o número atual e vamos continuar passando o maior número como acumulador*/
const numeros = [10, 25, 30, 56, 100]

const maiorNumero = numeros.reduce((acumulador, valorAtual) => {
  if (acumulador > valorAtual) {
    return acumulador
  } else return valorAtual
}, 0)

console.log(maiorNumero)

//Também podemos utilizar um ternário e simplificar o script 
const maiorNumero2 = numeros.reduce(acumulador, valorAtual =>
  acumulador > valorAtual ? acumulador : valorAtual
)
console.log(maiorNumero2)
