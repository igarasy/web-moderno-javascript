//Operadores de que precisam de apenas um elemento

let num1 = 1
let num2 = 2

// Irá somar uma unidade no valor total dele
num1++
console.log(num1)

//Irá subtrair uma unidade no valor total, quando usamos o operador antes da var ela terá prioridade na execução
--num1
console.log(num1)

//No primeiro exemplo a comparação é feita antes de subtrair o valor de 2 e por isso o resultado é true
console.log(++num1 === num2--)
console.log(num1===num2)
