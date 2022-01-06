/* Arrow Function, sempre temos que atribuir a uma constante 
Quando temos só um paramêtro não precisamos dos parenteses

Caso coloquemos um bloco é necessário inserir o return também
*/
const soma = (a, b) => a + b
console.log(soma(1, 2))

/* Arrow Function (this), irá apontar para o contexto que foi definida */
const lexico1 = () => console.log(this === exports)

//Paramêtro default
function log(texto = 'Valor padrão') {
  console.log(texto)
}
log()
log('Valor enviado')

/* Operador rest, no contexto da função, colocamos vários parametros e eles serão agrupados em um array dentro da função */

function total(...numeros) {
  let total = 0
  numeros.forEach(n => (total += n))
  return total
}

console.log(total(1, 2, 3))
