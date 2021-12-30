//arguments é o array interno de uma função, que reune todos os argumentos fornecidos na chamada da função

function soma() {
  let soma = 0
  for (i in arguments) {
    soma += arguments[i]
  }
  return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 3, 4, 5))
console.log(soma(1.2, 1.2, 'teste'))
