let isAtivo = false
console.log(isAtivo)

isAtivo = true // o 1 informa que o número é true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) // ele irá inverter o booleano, se colocarmos dois '!' ele irá voltar para a declaração inicial
//sempre que usarmos '!' irá forçar uma conversão para verdadeiro ou falso

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-3)
console.log(!!' ') // todos esses serão verdadeiros
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
